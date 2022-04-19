import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './components/Main';
import Pokemon from './components/Pokemon';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/pokemons" />
            </Route>
            <Route exact path="/pokemons">
                <Main />
            </Route>
            <Route path="/pokemon/:id">
                <Pokemon />
            </Route>
        </Switch>
    );
};

export default Routes;
