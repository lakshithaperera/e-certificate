
import './App.css';
import {ImProfile } from "react-icons/im";
import IMG1 from "./image/python.png";
import IMG2 from "./image/web.png";
import IMG4 from "./image/cert-CT-HBVX8UJC.jpg";
import IMG3 from "./image/cert-CT-TGVFIFUU.jpg";

function App() {
  return (
    <div className="container">
    <div className='home'>
      <a href="https://lakshithaperera.github.io/my-portfolio/"><ImProfile className='icon' /></a>
    
    </div>
          
      
      <div className='cards'>

        <div className='card'>
          <a href="https://drive.google.com/file/d/1HxR1lwOa7_xy1D4m7ffaLc5AsilCaAcT/view?usp=sharing" target="_blank" rel="noreferrer" ><img className='img' src={IMG1} alt="certificate" /></a>
          
          <h5>University of Moratuwa - python</h5>
          
        </div>

        <div className='card'>
          <a href="https://drive.google.com/file/d/1r9mrMjhUj5viOCDvPz2KuKFrb4w0EJwq/view?usp=sharing" target="_blank" rel="noreferrer">
          <img className='img' src={IMG2} alt="certificate" />
          </a>
          
          <h5>University of Moratuwa - Web Design</h5>
        </div>

        <div  className='card'>
          <a href="https://www.sololearn.com/Certificate/1059-22765429/jpg" target="_blank" rel="noreferrer">
          <img className='img' src={IMG3} alt="certificate" />
          </a>
          
          <h5>sololearn.com - php</h5>
        </div>


        <div className='card'>
         <a href='https://www.sololearn.com/Certificate/1014-22765429/jpg' target="_blank" rel="noreferrer"><img className='img' src={IMG4} alt="certificate" /></a> 
          <h5>sololearn.com - html</h5>
        </div>

      </div>
      <hr/>
    </div>
  );
}

export default App;
