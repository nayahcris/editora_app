/* eslint-disable */
import React, {useState, useEffect} from "react"
import { Image, Button } from "react-bootstrap"
import { useHistory, useParams} from 'react-router-dom'
import api from '../../services/api'
import IRevista from '../../interfaces/IRevista'
import IConto from '../../interfaces/IConto'
import formatDate from '../../functions/formatDate'

const Revista: React.FC = () => {

    const history = useHistory()
    const { _idRevista } = useParams <{ _idRevista: string }>()
    const [revista, setRevista] = useState<IRevista>()

    function voltar() {
        history.push('/revistas')
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


    const [conto, setConto] = useState<IConto[]>([])

    useEffect(() => {
        loadContos()
    }, [])

    async function loadContos(){
        const response = await api.get('/contos')
        console.log(response)
        setConto(response.data)
    }


    const contos = conto.filter(conto => conto._numeroRevista._idRevista === revista?._idRevista);

    return (
            <div className="container">
                < br/>
                <h1> Revista </h1>
                <br />
                <br />
                <Button className="component-right" onClick={voltar}>VOLTAR</Button>
                <br />
                <br />
                
                <p className="text-center">Número da Revista: {revista?._numeroRevista}</p>
                <p className="text-right">Gênero da Revista: {revista?._generoRevista}</p>
                <p>Contos da Revista</p>
                    {
                        contos.map((contos, _numeroRevista) => (
                            <tr key={revista?._idRevista}>
                                <p>Título do Conto: {contos._nomeConto}</p>
                                <p>Data da postagem: {formatDate(contos._dataCriacao)}</p>
                                <p>Data da atualização: {formatDate(contos._dataUpdate)}</p>
                                <p>Registro ISBN: {contos._registroISBN}</p>
                                <p>Nome do Autor: {contos._autor}</p>
                            </tr>
                                 ))
                    }
                            
  
                        

             </div>
            )

}

export default Revista
