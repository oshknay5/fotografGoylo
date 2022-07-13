import { useState } from "react";
import ContactFuter from "./ContactFuter";
import { dataPhoto } from "./dataPhoto";

;

function Home(){

    const [slide,setSlide]=useState(0);
    const{image}=dataPhoto[slide];
    const previousSlide = ()=> {
        setSlide((element=>{
            element--;
            if(element<0){
                return dataPhoto.length-1;
            }
            return element;
        }))
    }

    const nextSlide = ()=>{
        setSlide((element=>{
            element++;
            if(element>dataPhoto.length-1){
                element=0
            }
            return element;
        }))
    }

return(
<div className="main">
<div className="container">

<div className="slider"> 

 <div className="slider__wrapper-arrow">
 <button className="slider__arrow" onClick={previousSlide}> previous </button> 
</div>
<div>
<img  className="slider-image"  src={image}  alt='person'/>
</div>
<div className="slider__wrapper-arrow">
<button className="slider__arrow" onClick={nextSlide}>  next </button>
</div>
</div>
</div> 
<div>  
  <ContactFuter/>
 </div>
 </div>
    )
}
export default Home;