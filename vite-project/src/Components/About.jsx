import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Imgabout from './Imgabout'
import AboutContent from './AboutContent'
const About = (props) => {
return (
<div>
<Navbar/>
<Imgabout/>
<AboutContent who={props.data}/>
<Footer/>
</div>
)
}
export default About