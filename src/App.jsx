import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./routes/Home";
import PricingRouter from "./routes/Pricing"
import FaqRouter from "./routes/Faq"
import ContactRouter from "./routes/Contact"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingRouter />} />
        <Route path="/faq" element={<FaqRouter />} />
        <Route path="/contact" element={<ContactRouter />} />
      </Routes>
    </>
  );
}

export default App
