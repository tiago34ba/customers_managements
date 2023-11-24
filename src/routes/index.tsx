import React from 'react';
import { Route, Routes  } from 'react-router-dom';

import SignIn from '../pages/login/index';
import Register from '../pages/register/index';

const Rotas = () => {
    return (
        <Routes> 
            <Route  path='/' element={<SignIn />} />
            <Route  path='/register' element={<Register />} />
        </Routes>
    )
}

export default Rotas;
