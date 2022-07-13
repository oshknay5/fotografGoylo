
import { useState } from 'react';
import './App.css';
import ContactFuter from './ContactFuter';
import g4 from './g4.jpg';

function About(){
const [showMore, setShowMore] =useState(false);

    const textPar = 'Меня зовут Евгений, я портретный фотограф из Минска. \n В моих фотографиях я стремлюсь сохранить красоту мгновения вашей жизни, вашу искреннюю радость и естественность. Остановить миг, где мы ощущаем себя счастливыми, влюбленными, вдохновленными и настоящими.  \n Я помню, как сейчас, когда впервые взял камеру и окончательно влюбился в фотографию. \n Фотография - это моя машина времени. Это осознанное присутствие в настоящем моменте и возможность увидеть живописность каждого дня, и влюбиться в нее всем сердцем. \n Каждая новая съёмка для меня это полная отдача. \n Когда я работаю на свадьбах или на индивидуальных съёмках, я стараюсь стать вашим другом, и помощником. \n Помогаю вам расслабиться, довериться мне, и прочувствовать все эмоции дня на 200%.Насладиться процессом и отдохнуть, раскрыться с новой стороны и отдаться моменту. Я стараюсь чувствовать каждого, кто приходит ко мне. И всегда жду своих особенных людей, которые со мной на одной волне. У нас общие вкусы, любовь к эстетическим, чувственным и живым кадрам, как на картинах и в кино.';     
   
return (
<div className='about'>
<div className="container">
<div className='about__block'>
<div className="about__image">
<img className="photoGoylo" src={g4} alt='Goylo'/>
</div>
<div className="about__text">
<p className=' about__text-par'> { showMore ? textPar : textPar.substring(0,320) +"..."}  <button className='btn-showMore' onClick={()=> setShowMore( !showMore)}>{showMore ? 'Скрыть' : 'Еще'}</button></p>
 </div> 
 </div>
 </div>
 <div>
  <ContactFuter/>
 </div>

  </div>
)
}
export default About;