import React from 'react'
//import ReactDOM from 'react-dom'
import {Switch, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Tasks from '../src/pages/Tasks'
import Conto from "./pages/Conto"
import Contos from "./pages/Contos"
import Revistas from './pages/Revistas'
import Revista from './pages/Revista'
import Conectese from './pages/Conectese'
import ReactArApp from './pages/WebAr'



const Routes: React.FC = () => {
   return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" exact component={Tasks} />
            <Route path="/contos" exact component={Contos} />
            <Route path="/contos/:_idConto" exact component={Conto} />
            <Route path="/conectese" exact component={Conectese} />  
            <Route path="/revistas" exact component={Revistas} />  
            <Route path="/revistas/:_idRevista" exact component={Revista} />  
            <Route path="/webAr" component={ReactArApp} />   
        </Switch>
    )
}

export default Routes;