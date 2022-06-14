import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './Components/Resultaten/Results';
import Genomineerd from './Components/Resultaten/Genomineerd';
import Winnaar from './Components/Resultaten/Winnaar';
import Nav from './Components/Standard/Nav';
import Footer from './Components/Standard/Footer';
import Stripes from './Components/Home/Stripes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <nav><Nav/></nav>
    <div className='bodyContainer'>
      <Stripes/>
      <div id='indexContainer'>
        <Routes>
          <Route path="/"  element={<App/>}/>
          <Route path="/results"  element={<Results/>}/>
          <Route path="/genomineerden"  element={<Genomineerd/>}/>
          <Route path="/winnaars"  element={<Winnaar/>}/>
          <Route path="*" element={
            <h1>Page not found</h1>
          } />
        </Routes>
      </div>
    </div>  
    <footer><Footer/></footer>  
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
