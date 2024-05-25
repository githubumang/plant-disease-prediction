import Home from './components/home/Home';
import { Header } from './components/header/Header';
import { Contact } from './components/contact/Contact';
import { About } from './components/about/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
