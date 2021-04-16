import React, {useState, useEffect} from "react";
import {Table } from "react-bootstrap"
import api from '../../services/api'

interface IConto {
    _idConto: number;
    _nomeConto: string;
    _registroISBN: string;
    _autor: string;
    _conteudo: Text;
    _dataCriacao: Date;
    _dataUpdate: Date;
}

const Contos: React.FC = () => {

    const [conto, setConto] = useState<IConto[]>([])

    useEffect(() => {
        loadConto()
    }, [])

    async function loadConto(){
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
                        <th>REGISTRO ISBN</th>
                        <th>AUTOR</th>
                        <th>DATA DA POSTAGEM</th>
                        <th>DATA DA ATUALIZAÇÃO</th>
                    </tr>
                </thead>
                <tbody>

                        {
                                conto.map( conto => (
                                <tr key={conto._idConto}>
                                    <td>{conto._nomeConto}</td>
                                    <td>{conto._registroISBN}</td>
                                    <td>{conto._autor}</td>
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
