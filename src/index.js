import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App.jsx';
import { CategoryContextProvider } from './context/CreateContext';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
     <CategoryContextProvider>
       <App />
       </CategoryContextProvider>
  
 
    </React.StrictMode>
);  