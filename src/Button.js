

function Button({filteredPhoto}){
   
    return(

    <div className='btn-center'>
        <button className='change' onClick={()=>filteredPhoto('indPhoto')}>Портретное фото</button>
        <button className='change' onClick={()=>filteredPhoto('wedPhoto')}>Свадьбы</button>
        <button className='change' onClick={()=>filteredPhoto('lovePhoto')}>Love Story</button>
        <button className='change' onClick={()=>filteredPhoto('streetPhoto')}>Street Photo</button>
    </div>
   
        )
    }
    export default Button;