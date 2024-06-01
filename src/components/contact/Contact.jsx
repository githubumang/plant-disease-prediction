import React from 'react'
import './contact.css'

export const Contact = () => {
    const contactInfo = [
        {name:"Umang Agrawal", RollNo:"2000520130058", Email:"umang@gmail.com"},
        {name:"Om Prakash Chaurasiya ", RollNo: "2000520130037", Email:"om@gmail.com"},
        {name:"Nikhil Mishra ", RollNo:"2000520130035", Email:"nikhil@gmail.com"}
    ]
  return (
    <div className='contact'>
        {contactInfo.map((contact)=>{
            return(
                <div className='card'>
                    <div className='name'> {contact.name} </div>
                    <div className='rollNo'> {contact.RollNo} </div>
                    <div className='email'> {contact.Email} </div>
                </div>
            )
        })}
    </div>
  )
}
