import React from 'react'
import HomeView from '../view/home/HomeView'
import NotFoundView from '../view/notfound/NotFoundView'
import {Route, Routes, Navigate, BrowserRouter} from 'react-router-dom'

const Routing = (props) => {
    <BrowserRouter>
        {props.children}
        <Routes>
            <Route path={RoutePaths.wildcardView} element={<Navigate to={RoutePaths.notFoundView}/>}/>
            <Route path={RoutePaths.homeView} element={<HomeView/>}/>
            <Route path={RoutePaths.notFoundView} element={<NotFoundView/>}/>
        </Routes>
    </BrowserRouter>
}

export default Routing