import React from 'react'
import volunteer from '../assets/volunteer.jpg'
import  '../styles/Home.css';

function Home() {
  return (
    <div className = "center">
     <h1> Our Mission</h1> 
     <p className >
      At Volunteen, we strive to make volunteering accessible for 
      teenagers and anyone looking to give back. Our mission is to connect 
      volunteers with organizations in need, making it easy to find meaningful
       opportunities that align with your passions and schedule. Whether you're a
        teen looking to gain experience or someone of any age 
      wanting to make a difference, Volunteen is here to help you get involved
       and create a positive impact in your community.
     </p>
     <img src={volunteer} alt="Volunteering" />
      </div>
  )
}

export default Home