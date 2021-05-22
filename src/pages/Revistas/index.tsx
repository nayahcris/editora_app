/* eslint-disable */
import React, {useState, useEffect} from "react"
import {Table, Button} from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import IRevista from '../../interfaces/IRevista'
import IConto from '../../interfaces/IConto'

const Revista: React.FC = () => {

    const history = useHistory()
    const [revista, setRevista] = useState<IRevista[]>([])

    useEffect(() => {
        loadRevista()
    }, [])

    async function loadRevista(){
        const response = await api.get('/revistas')
        console.log(response)
        setRevista(response.data)
    }

    function viewRevista(_idRevista: number) {
        history.push(`/revistas/${_idRevista}`)
    }

    const [conto, setConto] = useState<IConto[]>([])

    useEffect(() => {
        loadContos()
    }, [])

    async function loadContos(){
        const response = await api.get('/contos')
        console.log(response)
        setConto(response.data)
    }
   
    function mostraRevistasFantasia() {
        history.push('/revistasFantasia')
    }

    function mostraRevistasFiccaoCientifica() {
        history.push('/revistasScifi')
    }

    return (
            <div className="container">
                < br/>
                <h1 className="text-center"> Revistas </h1>
                <br />
                <Button variant="info" onClick={mostraRevistasFantasia}>Filtrar pelo Gênero Fantasia</Button>
                <br />
                <br />
                <Button variant="info" onClick={mostraRevistasFiccaoCientifica}>Filtrar pelo Gênero Ficção Ciêntifica</Button>
            
                        {
                                revista.map((revista)=> (
                                <ul key={revista._idRevista}>
                                    <li>ID Revista: {revista._idRevista}</li> 
                                    <li>Número da Revista: {revista._numeroRevista}</li>
                                    <li>Gênero da Revista: {revista._generoRevista}</li>
                                    <li>
                                        <Button size="sm" variant="info" onClick={() => viewRevista(revista._idRevista)}>Visualizar</Button>{' '}
                                    </li>
                                </ul>
                                 ))
                        }
             </div>
            )

}

export default Revista
