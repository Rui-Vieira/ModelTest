import React from 'react';
import { createRoot } from "react-dom/client"
import { ModalComponent } from './container/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ModalComponent } from './container/Modal.js';
import { PopUpForm } from './container/popUpForm/PopupForm';

const domContainer = document.getElementById("app");
const root = createRoot(domContainer);

function App() {
    
    return (
       <>
       <PopUpForm/>
       </>

    )
}

root.render(<App />)