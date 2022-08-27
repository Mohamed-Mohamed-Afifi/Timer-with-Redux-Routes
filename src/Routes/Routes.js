import React from "react";
import { Routes, Route } from 'react-router-dom';
import CountComponent from "../CountComponent";
import NotFound from "../NotFound";
import TimerComponent from "../TimerComponent";

const Routs = () => {
    return (
        <Routes>
            <Route path='/Counter' element={<CountComponent />} />
            <Route path='/Timer' element={<TimerComponent />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
export default Routs;