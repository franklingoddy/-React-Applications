import Navbar from "./Components/navbar/Navbar"
import Header from "./Containers/header/Header"
import Brand from "./Components/brand/Brand"
import GPT3 from "./Containers/whatGPT3/GPT3"
import Feature from "./Containers/features/Features"
import Possibility from "./Containers/possibility/Possibility"
import CTA from "./Components/cta/CTA"
import Blog from "./Containers/blog/Blog"
import Footer from "./Containers/footer/Footer"
import "./index.css"




function App() {
  return(
    <div className="App">
      <div className="gradient__bg">
       <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
