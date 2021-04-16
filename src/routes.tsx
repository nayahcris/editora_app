import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from '../src/pages/Home'
import Tasks from '../src/pages/Tasks'
import Conto from "./pages/Conto";
import Contos from "./pages/Contos";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" component={Tasks} />
            <Route path="/contos" component={Contos} />
            <Route path="/conto" component={Conto} />
        </Switch>
    )
}

export default Routes;