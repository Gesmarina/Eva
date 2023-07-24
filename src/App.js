import React, {useEffect, useState} from "react";
import {Routes, Route, Link, Form} from "react-router-dom"
import Joyas from "./components/Joyas"
import Cuidados from "./components/Cuidados";
import Historia from "./components/Historia";
import Cultura from "./components/Cultura";


const App= () => {
  return (
    <Routes>
      <Route path="/"element={<Joyas />}/>
      <Route path="/Diaguita" element={<Joyas />} />
      <Route path="/Cuidados" element={<Cuidados />} />
      <Route path="/Historia" element={<Historia />} />
      <Route path="/Cultura" element={<Cultura />} />
      

    </Routes>
  )
}

export default App;
