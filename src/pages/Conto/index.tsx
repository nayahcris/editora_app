import React, {useState, useEffect} from "react"
import { Image, Button } from "react-bootstrap"
import { useHistory, useParams} from 'react-router-dom'
import api from '../../services/api'
import IConto from '../../interfaces/IConto'
import { } from './logoSG.jpeg'

const Conto: React.FC = () => {
    
    const history = useHistory()
    const { _idConto } = useParams <{ _idConto: string }>()
    const [conto, setConto] = useState<IConto>()

    
    function goToRa(){
      history.push("/webAr")
    }
    function voltar() {
        history.push('/contos')
    }

    useEffect(() => {
        findConto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [_idConto])

    async function findConto() {

        const response = await api.get<IConto>(`/contos/${_idConto}`)
        console.log(response)
        setConto(response.data)

    }
    return (
            <div className="container">
                < br/>
                <h1 className="text-center">{conto?._nomeConto}</h1>
                <br />
                <br />
                <Button className="component-right" onClick={goToRa}>LIGAR A RA</Button>
                <br />
                <br />
                <Button className="component-right" onClick={voltar}>VOLTAR</Button>
                <br />
                <br />
                <Image src={`conto?._urlDaRa._urlDaRa`} />
                <br />
                <p className="text-right">Registro ISBN: {conto?._registroISBN}</p>
                <p className="text-right">Autor: {conto?._autor}</p>
                <p className="text-right">Editor: {conto?._editor._nome}</p>
                <p className="text-right">Designer: {conto?._designer._nome}</p>
                <p className="text-right">Revisor: {conto?._revisor._nome}</p>
            </div>
            )
}
export default Conto
