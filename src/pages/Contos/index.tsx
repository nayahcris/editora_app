import React, {useState, useEffect} from "react"
import {Table} from "react-bootstrap"
import api from '../../services/api'
import IConto from '../../interfaces/IConto'

const Contos: React.FC = () => {

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
                <h1 className="text-center"> Contos </h1>
                <br />
                <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>NÚMERO REVISTA</th>
                        <th>REGISTRO ISBN</th>
                        <th>AUTOR</th>
                        <th>SINOPSE</th>
                        <th>DATA DA POSTAGEM</th>
                        <th>DATA DA ATUALIZAÇÃO</th>
                    </tr>
                </thead>
                <tbody>

                        {
                                conto.map( (conto, _numeroRevista )=> (
                                <tr key={conto._idConto}>
                                    <td>{conto._nomeConto}</td>
                                    <td>{conto._numeroRevista._numeroRevista}</td>
                                    <td>{conto._registroISBN}</td>
                                    <td>{conto._autor}</td>
                                    <td>{conto._sinopse}</td>
                                    <td>{conto._dataCriacao}</td>
                                    <td>{conto._dataUpdate}</td>
                                </tr>
                                 ))
                        }
                    </tbody>
                </Table>
             </div>
            )

}

export default Contos
