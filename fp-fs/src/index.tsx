import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './Components/Resultaten/Results';
import Genomineerd from './Components/Resultaten/Genomineerd';
import Winnaar from './Components/Resultaten/Winnaar';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App/>}/>
      <Route path="/results"  element={<Results/>}/>
      <Route path="/results/genomineerden"  element={<Genomineerd/>}/>
      <Route path="/results/winnaars"  element={<Winnaar/>}/>
      <Route path="*" element={
        <h1>Page not found</h1>
      } />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
