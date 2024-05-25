import React from 'react'
import './contact.css'

export const Contact = () => {
    const contactInfo = [
        {name:"Umang", RollNo:"2000520130058", Email:"umang@gmail.com"},
        {name:"Nikhil", RollNo:"2000520130058", Email:"nikhil@gmail.com"},
        {name:"Om", RollNo: "2000520130058", Email:"om@gmail.com"}
    ]
  return (
    <div>
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
