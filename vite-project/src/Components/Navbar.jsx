import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
window.addEventListener("scroll", () => {
var site_header = document.querySelector(".Header");
site_header.classList.toggle("sticky", window.scrollY > 0);
});
return (
<div className="Header">
<Link to='/' className='Port1'>
<h1>Portfolio</h1>
</Link>
<ul className="navbar">
<li>
<Link to='/' className='li'>Home</Link>
</li>
<li>
<Link to='/project' className='li'>Projects</Link>
</li>
<li>
<Link to='/about' className='li'>About</Link>
</li>
<li>
<Link to='/contact' className='li'>Contact</Link>
</li>
</ul>
<Link to='/make' className='Port2'>
<h2>Make Your Own Portfolio</h2>
</Link>
</div>
)
}
export default Navbar