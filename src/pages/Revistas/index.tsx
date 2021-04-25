/* eslint-disable */
import React, {useState, useEffect} from "react"
import {Table} from "react-bootstrap"
import api from '../../services/api'
import IRevista from '../../interfaces/IRevista'
import IConto from '../../interfaces/IConto'

const Revista: React.FC = () => {

    const [revista, setRevista] = useState<IRevista[]>([])

    useEffect(() => {
        loadRevista()
    }, [])

    async function loadRevista(){
        const response = await api.get('/revistas')
        console.log(response)
        setRevista(response.data)
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

    return (
            <div className="container">
                < br/>
                <h1 className="text-center"> Revistas </h1>
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
                                revista.map((revista)=> (
                                <tr key={revista._idRevista}>
                                    <td>{revista._idRevista}</td>
                                    <td>{revista._numeroRevista}</td>
                                    <td>{revista._generoRevista}</td>
                                </tr>
                                 ))
                        }
                    </tbody>
                </Table>
             </div>
            )

}

export default Revista
