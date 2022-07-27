import React from "react";
import { Routes, Route } from "react-router-dom";
import home from "../views/Home";

const indexroute =()=>{
    return(
<Routes>
    <Route path="/home" element={<home/>}></Route>
</Routes>
    );
}
export default indexroute;

