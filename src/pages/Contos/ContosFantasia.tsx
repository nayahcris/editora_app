import React, {useState, useEffect} from "react"
import {Table, Button} from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import formatDate from '../../functions/formatDate'
import api from '../../services/api'
import IConto from '../../interfaces/IConto'

const Contos: React.FC = () => {

    const history = useHistory()
    const [conto, setConto] = useState<IConto[]>([])

    useEffect(() => {
        loadContos()
    }, [])

    async function loadContos(){
        const response = await api.get('/contos')
        console.log(response)
        setConto(response.data)
    }

    function viewConto(_idConto: number) {
        history.push(`/contos/${_idConto}`)
    }

    const contosFantasia = conto.filter(conto => conto._numeroRevista._generoRevista === "Fantasia");

    return (
            <div className="container">
                < br/>
                <h1 className="text-center"> Contos Gênero Fantasia </h1>
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
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>

                        {
                                contosFantasia.map( (contosFantasia, _numeroRevista )=> (
                                <tr key={contosFantasia._idConto}>
                                    <td>{contosFantasia._nomeConto}</td>
                                    <td>{contosFantasia._numeroRevista._numeroRevista}</td>
                                    <td>{contosFantasia._registroISBN}</td>
                                    <td>{contosFantasia._autor}</td>
                                    <td className="text-justify">{contosFantasia._sinopse}</td>
                                    <td>{formatDate(contosFantasia._dataCriacao)}</td>
                                    <td>{formatDate(contosFantasia._dataUpdate)}</td>
                                    <td>
                                        <Button size="sm" variant="info" onClick={() => viewConto(contosFantasia._idConto)}>Visualizar</Button>{' '}
                                    </td>
                                </tr>
                                 ))
                        }
                    </tbody>
                </Table>
             </div>
            )

}

export default Contos
