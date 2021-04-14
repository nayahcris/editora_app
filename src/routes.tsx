import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Tasks from '../src/pages/Tasks'

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" component={Tasks} />
        </Switch>
    )
}

export default Routes;