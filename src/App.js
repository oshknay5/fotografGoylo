
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (<Router>
<nav>
<div className='nav-brand'>
<Link to='/'className='nav-brand__link-brand'>Goylo Yauheni</Link><hr/>
</div>
<Link to='/home'className='link'>Главная</Link> 
<Link to='/portfolio'className='link'>Портфолио</Link>
<Link to='/about'className='link'>Обо мне</Link>
<Link to='/contact'className='link'>Контакты</Link>
</nav>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/portfolio' element={<Portfolio/>}/>
</Routes>
</Router>

  );
}

export default App;
