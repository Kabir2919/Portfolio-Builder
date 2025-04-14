import React from 'react'
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from
"react-icons/fa"
const Footer = (props) => {
return (
<div className='footer'>
<div className='footer-container'>
<div className='left'>
<div className="loaction">
<div>
<FaHome size={20}
style={{color:"#fff",marginRight:"2rem"}}/>
</div>
<div>
<p>Address : {props.passedData}</p>
<p>Country : {props.country}</p>
</div>
</div>
<div className="phone">
<h4><FaPhone size={20}
style={{color:"#fff",marginRight:"2rem"}}/>Phone Number: {props.contact}</h4>
</div>
<div className="email">
<h4><FaMailBulk size={20}
style={{color:"#fff",marginRight:"2rem"}}/>Email: {props.email}</h4>
</div>
</div>
<div className="right">
<h4>About Myself</h4>
<p>{props.you}</p>
<div className="social">
<FaFacebook size={30}
style={{color:"#fff",marginRight:"1rem"}}/>
<FaTwitter size={30}
style={{color:"#fff",marginRight:"1rem"}}/>
<FaLinkedin size={30}
style={{color:"#fff",marginRight:"1rem"}}/>
</div>
</div>
</div>
</div>
)
}
export default Footer