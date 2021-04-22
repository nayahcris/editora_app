import React from 'react'
//import ReactDOM from 'react-dom'
import {Switch, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Tasks from '../src/pages/Tasks'
import Conto from "./pages/Conto"
import Contos from "./pages/Contos"
import Conectese from './pages/Conectese'
import ReactArApp from './pages/WebAr'



const Routes: React.FC = () => {
   return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" component={Tasks} />
            <Route path="/contos" component={Contos} />
            <Route path="/conto" component={Conto} />
            <Route path="/conectese" component={Conectese} />   
            <Route path="/webAr" component={ReactArApp} />   
        </Switch>
    )
}

export default Routes;