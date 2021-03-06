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
import DetailMob from './Components/Home/details/DetailMob';
import BackgroundStripes from './Components/Home/Stripes/BackgroundStripes';
import SharedDetail from './Components/Home/details/SharedDetail';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <nav className='nav'><Nav/></nav>
    <div className='bodyContainer'>
      <BackgroundStripes/>
      <div id='indexContainer'>
        <Routes>
          <Route path="/"  element={<App/>}/>
          <Route path="/finalwork/:id" element={<SharedDetail/>}/>
          <Route path="/results"  element={<Results/>}/>
          <Route path="/detail" element={<DetailMob/>}/>
          <Route path="/genomineerden"  element={<Genomineerd/>}/>
          <Route path="/winnaars"  element={<Winnaar/>}/>
          <Route path="*" element={
            <h1>Page not found</h1>
          } />
        </Routes>
      </div>
    </div>  
    {/* <footer id='footer'><Footer/></footer>   */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
