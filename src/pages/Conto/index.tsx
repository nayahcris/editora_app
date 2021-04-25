/* eslint-disable */
import React, {useState, useEffect} from "react"
import { Image, Button } from "react-bootstrap"
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import IConto from '../../interfaces/IConto'
import { } from './logoSG.jpeg'

const Conto: React.FC = () => {

    const [conto, setConto] = useState<IConto[]>([])
    const history = useHistory()
   
    function goToRa(){
        history.push("/webAr")
    }

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
                <h1> Conto </h1>
                <br />
                <br />
                <Button className="component-right" onClick={goToRa}>LIGAR A RA</Button>
                <br />
                <br />
                <br />
                <Image src="./logoSG.jpeg" />
                <br />


                        {
                               conto.map( (conto, _numeroRevista )=> (
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
