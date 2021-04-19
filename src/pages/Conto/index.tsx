import React, {useState, useEffect} from "react";
import { Image } from "react-bootstrap"
import api from '../../services/api'

interface IConto {
    _idConto: number;
    _nomeConto: string;
    _registroISBN: string;
    _autor: string;
    _conteudo: Text;
}

const Conto: React.FC = () => {

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
                <h1> Conto </h1>
                <br />
                <Image src="src/pages/Conto/logoSG.jpeg" />
                <br />


                        {
                                conto.map( conto => (
                                <tr key={conto._idConto}>
                                    <p  className="text-center">Nome do conto: {conto._nomeConto}</p>
                                    <p className="text-right">Registro ISBN: {conto._registroISBN}</p>
                                    <p className="text-right">Autor: {conto._autor}</p>
                                    <p className="text-justify">{conto._conteudo}</p>
                                </tr>
                                 ))
                        }

             </div>
            )

}

export default Conto
