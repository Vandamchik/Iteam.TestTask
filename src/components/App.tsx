import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';


export function App(): JSX.Element {


  return (
    <Fragment>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        {/*<Route path="/:id" element={ <DetailsInformation /> } />*/}
        {/*<Route path="/favorites" element={ <Favorites /> } />*/}
      </Routes>
    </Fragment>
  );
}
