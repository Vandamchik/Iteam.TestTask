import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { Favorites } from "../pages/Favorites";


export function App(): JSX.Element {


  return (
    <Fragment>
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          {/*<Route path="/:id" element={ <DetailsInformation /> } />*/}
      </Routes>
    </Fragment>
  );
}
