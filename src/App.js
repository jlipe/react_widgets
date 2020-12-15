import React from 'react';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import Videos from './components/Videos';



export default () => {

  return(
    <div>
      <Header />
      <Route path="/">
        <Videos />
      </Route>
      <Route path="/wiki">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
    );
};
