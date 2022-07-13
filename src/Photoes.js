

function Photoes({photo}){
    return(
    <div className='container'>
    <div className="block-photo-wrap">
    {photo.map((element =>{
       const {id,image} = element;
       return(
    <div className='photo-card' key={id}>
    <img className="photo-card__img"  src={image} width='300px'  height='400px' alt='фото'/>
     </div>
     )
     }))}
    </div>
    </div>
        )
    }
    export default Photoes;