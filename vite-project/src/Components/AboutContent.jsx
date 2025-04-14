import React from 'react'
import {Link} from "react-router-dom";
const AboutContent = (props) => {
return (
<div className="about">
<div className="left">
<h1>Who Am I ?</h1>
<p>{props.data}</p>
<Link to="/contact" className="btn">Contact</Link>
</div>
<div className="right">
<div className="img-container">
<div className="top">
<img className="img" src="https://knackforge.com/wpcontent/uploads/2022/11/Benefits-of-ReactJS.jpg"></img>
</div>
<div className="bottom">
<img className="img" src="https://www.shutterstock.com/imagevector/javascript-programming-language-script-code-260nw1062509657.jpg"></img>
</div>
</div>
</div>
</div>
)
}
export default AboutContent