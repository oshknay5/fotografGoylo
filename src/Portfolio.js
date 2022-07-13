
import { useState } from 'react';
import Button from './Button';
import { dataPhoto } from './dataPhoto';

import Photoes from './Photoes';


function Portfolio(){
 const [photo,setPhoto]=useState(dataPhoto)

const chosenPhoto =(serchTerm) =>{
const newPhoto = dataPhoto.filter(element =>
element.serchTerm===serchTerm);
setPhoto(newPhoto);
}
return (<div className='portfolio'>
<div className='container '>
<div className='portfolio__container'>
<div className="block-center">
<h2 className='block-center__title'>Portfolio</h2>
</div>

<div className='container button-container'>
<Button filteredPhoto={chosenPhoto}/>
</div>
<div className='container'></div>
<Photoes photo={photo}/>
</div>
</div>
</div>
)
}
export default Portfolio;