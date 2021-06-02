import React from 'react'
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
import EditorTexto from './pages/EditorTexto'
import Editor from './pages/Editor'
import EditorForm from './pages/Editor/EditorForm'
import ContosForm from './pages/Contos/FormConto'
import HomeQrcode from './pages/Qrcode/index'
import QRgenerator from './pages/Qrcode/QRgenerator'
import QRscanner from './pages/Qrcode/QRscanner'
import QRCodeForm from './pages/Qrcode/QRcodeform'
import RaForm from './pages/Ra/ra-form'
import Task from './pages/Tasks/tasksform'




const Routes: React.FC = () => {
   return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tarefas" exact component={Tasks} />
            <Route path="/tarefas-cadastro" exact component={Task} />
            <Route path="/contos" exact component={Contos} />
            <Route path="/contos/:_idConto" exact component={Conto} />
            <Route path="/contos-fantasia" exact component={ContosFantasia} />
            <Route path="/contos-scifi" exact component={ContosScifi} />
            <Route path="/conectese" exact component={Conectese} />  
            <Route path="/revistas" exact component={Revistas} />  
            <Route path="/revistas/:_idRevista" exact component={Revista} />  
            <Route path="/revistas-fantasia" exact component={RevistaFantasia} /> 
            <Route path="/revistas-scifi" exact component={RevistaScifi} /> 
            <Route path="/web-ar" component={ReactArApp} />   
            <Route path="/editor-texto" component={EditorTexto} />  
            <Route path="/editores/:_idEditor" exact component={Editor} /> 
            <Route path="/contos-form" exact component={ContosForm}/>
            <Route path="/qrcode" exact component={HomeQrcode} />
            <Route path="/qr_generator" exact component={QRgenerator} />
            <Route path="/qr_scanner" exact component={QRscanner} />
            <Route path="/qrcode-form" exact component={QRCodeForm} />
            <Route path="/ra-form" exact component={RaForm} />
            <Route path="/editor-form" exact component={EditorForm} />
        </Switch>
    )
}

export default Routes
