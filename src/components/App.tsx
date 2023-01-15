import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { FavoritesPage } from "../pages/FavoritesPage";
import { DetailsInfoPage } from "../pages/DetailsInfoPage";


export function App(): JSX.Element {


  return (
    <Fragment>
      <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/favorites" element={ <FavoritesPage /> } />
          <Route path="/:id" element={ <DetailsInfoPage /> } />
          {/*<Route path="*" element={ <DetailsInfoPage /> } />*/}
      </Routes>
    </Fragment>
  );
}
