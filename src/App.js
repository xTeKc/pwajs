import React, { useState } from 'react';

import { fetchData } from './api/fetchData';
import './App.css';

const App = () => {
    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search..."
                value={}
                onChange={}
            />
        </div>
    );
}

export default App;