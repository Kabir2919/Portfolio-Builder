import React from 'react'
import {Link} from "react-router-dom";
const ImgHome = (props) => {
return (
<div className="image">
<div className="mask">
<img className="homeimg" src="https://i.gifer.com/LCPT.gif"/>
</div>
<div className="content">
<p>Name: {props.full}</p>
<h1>{props.passedData} DEVELOPER</h1>
<div>
<Link to="/project" className="btn">Projects</Link>
<Link to="/contact" className="lbtn">Contact</Link>
</div>
</div>
</div>
)
}
export default ImgHome