import React, {useState} from 'react'
import "./home.css"

const Home = () => {
    const [imgData, setImgData] = useState("Choose the image");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [diseaseData, setDiseaseData] = useState("");
    const diseaseInfor = {
      "Rust": "The rusts are a group of fungal diseases affecting the aerial parts of plants. Leaves are affected most commonly, but rust can also be found occasionally on stems and even flowers and fruit. The spore pustules produced by rusts vary in colour, according to the rust species and the type of spore that it is producing.",
      "leaf" : "There is the leaf."
    };

    const sendImage = async (imageFile) => {
        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("string(Shinary)", "your_shinary_value_if_needed");
        try {
          const response = await fetch("https://arpy8-plant-detection-api.hf.space/predict", {
            method: "POST",
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
      
          const data = await response.json();
          setImgData("Image prediction results: " + data);
          setDiseaseData(diseaseInfor[data]);
          setIsLoading(false);
          // Handle the prediction results here (e.g., display on UI)
        } catch (error) {
          setImgData("Can't send image");
          setIsLoading(false);
        }
    };

    const handleImageChange = (event) => {
        setIsLoading(true);
        const selectedFile = event.target.files[0];
        if (selectedFile) {
        setSelectedImage(URL.createObjectURL(selectedFile)); // Create object URL for preview
        sendImage(selectedFile); // Send the image for prediction
        }
    };                                          
    
      return (
        <div>
          <input type="file" onChange={handleImageChange} className='inputImg' accept="capture=camera,image/*"/>
          <br/>
          <div className='content'>
            <div className='image'>
                {selectedImage && ( // Conditionally render preview image
                    <img src={selectedImage} alt="Leaf" />
                )}
            </div>
            <div className='information'>
                {isLoading? 
                    <div className='loading'>
                        Loading.... 
                    </div>
                    : 
                    <div>
                        {imgData}
                        <br/>
                        <br/>
                        {diseaseData}
                    </div>
                }
            </div>

        </div>
        </div>
      );
}

export default Home