import Navbar from './Navbar'
import ImgHome from './ImgHome.jsx'
import ImgProject from './ImgProject.jsx'
import React,{useState} from 'react';
import Footer from './Footer.jsx'
import AboutContent from './AboutContent.jsx'
import Work from './Work.jsx'
import Imgabout from './Imgabout.jsx'
import Contactimg from './Contactimg.jsx'
import ContactForm from './ContactForm.jsx'
const InputForm = () => {
const [userInput,setUserInput]=useState('');
const [name,setname]=useState('');
const [address,setaddress]=useState('')
const [country,setcountry]=useState('')
const [phone,setphone]=useState('')
const [mail,setmail]=useState('')
const [who,setwho]=useState('')
const [title1,settitle1]=useState('')
const [d1,setd1]=useState('')
const [title2,settitle2]=useState('')
const [d2,setd2]=useState('')
const [title3,settitle3]=useState('')
const [d3,setd3]=useState('')
const [i1,seti1]=useState('')
const [i2,seti2]=useState('')
const [i3,seti3]=useState('')
const handleChange=(e)=>{
setUserInput(e.target.value);
};
const handleChange1=(e)=>{
setname(e.target.value);
};
const handleChange2=(e)=>{
setaddress(e.target.value);
};
const handleChange3=(e)=>{
setcountry(e.target.value);
};
const handleChange4=(e)=>{
setphone(e.target.value);
};
const handleChange5=(e)=>{
setmail(e.target.value);
};
const handleChange6=(e)=>{
setwho(e.target.value);
};
const handleChange7=(e)=>{
settitle1(e.target.value);
};
const handleChange8=(e)=>{
setd1(e.target.value);
};
const handleChange9=(e)=>{
settitle2(e.target.value);
};
const handleChange10=(e)=>{
setd2(e.target.value);
};
const handleChange11=(e)=>{
settitle3(e.target.value);
};
const handleChange12=(e)=>{
setd3(e.target.value);
};
const handleChange13=(e)=>{
seti1(e.target.value);
};
const handleChange14=(e)=>{
seti2(e.target.value);
};
const handleChange15=(e)=>{
seti3(e.target.value);
};
return (<>
<Navbar/>
<div className="form">
<form>
<label>Full Name: </label>
<input type="text" placeholder="Full Name"
onChange={handleChange1}></input>
<label>Which Developer Are You ? </label>
<input type="text" placeholder="REACT"
onChange={handleChange}></input>
<label>Your Address: </label>
<input type="text" placeholder="Address Line"
onChange={handleChange2}></input>
<label>Your Country: </label>
<input type="text" placeholder="India"
onChange={handleChange3}></input>
<label>Contact Number: </label>
<input type="tel" placeholder="99999 99999"
onChange={handleChange4}></input>
<label>Your Email: </label>
<input type="text" placeholder="someone@gmail.com"
onChange={handleChange5}></input>
<label>About Yourself: </label>
<textarea rows="5" placeholder="Who Are You ?"
onChange={handleChange6}></textarea>
<label>Project 1 Title: </label>
<input type="text" onChange={handleChange7} placeholder="Project
1"></input>
<label>Project 1 Description: </label>
<textarea rows="5" placeholder="Project Details"
onChange={handleChange8}></textarea>
<label>Project 1 Image Link: </label>
<input type="text" placeholder="" onChange={handleChange13}></input>
<label>Project 2 Title: </label>
<input type="text" placeholder="" onChange={handleChange9}></input>
<label>Project 2 Description: </label>
<textarea rows="5" placeholder="Project Details"
onChange={handleChange10}></textarea>
<label>Project 2 Image Link: </label>
<input type="text" placeholder="" onChange={handleChange14}></input>
<label>Project 3 Title: </label>
<input type="text" placeholder="" onChange={handleChange11}></input>
<label>Project 3 Description: </label>
<textarea rows="5" placeholder="Project Details"
onChange={handleChange12}></textarea>
<label>Project 3 Image Link: </label>
<input type="text" placeholder="" onChange={handleChange15}></input>
</form>
<ImgHome passedData={userInput} full={name}/>
<Work t1={title1} d1={d1} t2={title2} d2={d2} t3={title3} d3={d3}
i1={i1} i2={i2} i3={i3}/>
<ImgProject/>
<Work t1={title1} d1={d1} t2={title2} d2={d2} t3={title3} d3={d3}
i1={i1} i2={i2} i3={i3}/>
<Imgabout/>
<AboutContent data={who}/>
{/* <About data={who}/> */}
<Contactimg/>
<ContactForm/>
<Footer passedData={address} country={country} contact={phone}
email={mail} you={who}/>
</div>
</>)
}
export default InputForm