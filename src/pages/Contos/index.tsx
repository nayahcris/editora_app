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


    function mostraContosFantasia() {
        history.push('/contosFantasia')
    }

    function mostraContosFiccaoCientifica() {
        history.push('/contosScifi')
    }
    

    return (
            <div className="container">
                < br/>
                <h1 className="text-center"> Contos </h1>
                <br />
                <Button variant="info" onClick={mostraContosFantasia}>Filtrar pelo Gênero Fantasia</Button>
                <br />
                <br />
                <Button variant="info" onClick={mostraContosFiccaoCientifica}>Filtrar pelo Gênero Ficção Ciêntifica</Button>
                <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>TÍTULO</th>
                        <th>NÚMERO REVISTA</th>
                        <th>REGISTRO ISBN</th>
                        <th>AUTOR</th>
                        <th>EDITOR</th>
                        <th>DESIGNER</th>
                        <th>REVISOR</th>
                        <th>SINOPSE</th>
                        <th>DATA DA POSTAGEM</th>
                        <th>DATA DA ATUALIZAÇÃO</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>

                        {
                                conto.map( (conto, _numeroRevista)=> (
                                <tr key={conto._idConto}>
                                    <td>{conto._nomeConto}</td>
                                    <td>{conto._numeroRevista._numeroRevista}</td>
                                    <td>{conto._registroISBN}</td>
                                    <td>{conto._autor}</td>
                                    <td>{conto._editor._nome}</td>
                                    <td>{conto._designer._nome}</td>
                                    <td>{conto._revisor._nome}</td>
                                    <td className="text-justify">{conto._sinopse}</td>
                                    <td>{formatDate(conto._dataCriacao)}</td>
                                    <td>{formatDate(conto._dataUpdate)}</td>
                                    <td>
                                        <Button size="sm" variant="info" onClick={() => viewConto(conto._idConto)}>Visualizar</Button>{' '}
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
