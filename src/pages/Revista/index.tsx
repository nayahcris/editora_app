/* eslint-disable */
import React, {useState, useEffect} from "react"
import { Image, Button } from "react-bootstrap"
import { useHistory, useParams} from 'react-router-dom'
import api from '../../services/api'
import IRevista from '../../interfaces/IRevista'

const Revista: React.FC = () => {

    const history = useHistory()
    const { _idRevista } = useParams <{ _idRevista: string }>()
    const [revista, setRevista] = useState<IRevista>()

    function voltar() {
        history.goBack()
    }

    useEffect(() => {
        findRevista()
    // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [_idRevista])

    async function findRevista() {

        const response = await api.get<IRevista>(`/revistas/${_idRevista}`)
        console.log(response)
        setRevista(response.data)

    }
    return (
            <div className="container">
                < br/>
                <h1> Revista </h1>
                <br />
                <br />
                <Button className="component-right" onClick={voltar}>VOLTAR</Button>
                <br />
                <br />
                        {
                             
                               <tr>
                                    <p  className="text-center">Número da Revista: {revista?._numeroRevista}</p>
                                    <p className="text-right">Gênero da Revista: {revista?._generoRevista}</p>
                                    <p>Contos da Revista</p>
                                </tr>
                             
                        }

             </div>
            )

}

export default Revista
