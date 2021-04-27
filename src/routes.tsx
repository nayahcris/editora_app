import React from 'react'
//import ReactDOM from 'react-dom'
import {Switch, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Tasks from '../src/pages/Tasks'
import Conto from "./pages/Conto"
import Contos from "./pages/Contos/index"
import ContosFantasia from './pages/Contos/ContosFantasia'
import ContosScifi from './pages/Contos/ContosScifi'
import Revistas from './pages/Revistas/index'
import Revista from './pages/Revista'
import RevistaFantasia from './pages/Revistas/RevistasFantasia'
import RevistaScifi from './pages/Revistas/RevistasScifi'
import Conectese from './pages/Conectese'
import ReactArApp from './pages/WebAr'



const Routes: React.FC = () => {
   return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" exact component={Tasks} />
            <Route path="/contos" exact component={Contos} />
            <Route path="/contos/:_idConto" exact component={Conto} />
            <Route path="/contosFantasia" exact component={ContosFantasia} />
            <Route path="/contosScifi" exact component={ContosScifi} />
            <Route path="/conectese" exact component={Conectese} />  
            <Route path="/revistas" exact component={Revistas} />  
            <Route path="/revistas/:_idRevista" exact component={Revista} />  
            <Route path="/revistasFantasia" exact component={RevistaFantasia} /> 
            <Route path="/revistasScifi" exact component={RevistaScifi} /> 
            <Route path="/webAr" component={ReactArApp} />   
        </Switch>
    )
}

export default Routes;