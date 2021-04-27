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
   
    const RevistasFantasia = revista.filter(revista => revista._generoRevista == "Ficção Cientifica");
    

    return (
            <div className="container">
                < br/>
                <h1 className="text-center"> Revistas do gênero Ficção Cientifica </h1>
                <br />
                <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID REVISTA</th>
                        <th>NÚMERO REVISTA</th>
                        <th>GENERO REVISTA</th>
                    </tr>
                </thead>
                <tbody>

                        {
                                RevistasFantasia.map((RevistasFantasia)=> (
                                <tr key={RevistasFantasia._idRevista}>
                                    <td>{RevistasFantasia._idRevista}</td>
                                    <td>{RevistasFantasia._numeroRevista}</td>
                                    <td>{RevistasFantasia._generoRevista}</td>
                                    <td>
                                        <Button size="sm" variant="info" onClick={() => viewRevista(RevistasFantasia._idRevista)}>Visualizar</Button>{' '}
                                    </td>
                                </tr>
                                 ))
                        }
                    </tbody>
                </Table>
             </div>
            )

}

export default Revista
