import Home from './Components/Home.jsx'
import Projects from './Components/Projects.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import {Routes,Route} from "react-router-dom"
import InputForm from "./Components/InputForm.jsx"
import "./App.css"
function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/make' element={<InputForm/>}/>
    </Routes>
  </>
  )
}
export default App