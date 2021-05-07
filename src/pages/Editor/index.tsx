/* eslint-disable */
import React, {useState, useEffect} from "react"
import { Table, Button } from "react-bootstrap"
import { useHistory, useParams} from 'react-router-dom'
import api from '../../services/api'
import IEditor from '../../interfaces/IEditor'
import IConto from '../../interfaces/IConto'
import formatDate from '../../functions/formatDate'
import Contos from "../Contos"

const Editor: React.FC = () => {
    
    const history = useHistory()

    const { _idEditor } = useParams <{ _idEditor: string }>()
    const [editor, setEditor] = useState<IEditor>()

    
    useEffect(() => {
        findEditor()
     }, [_idEditor])

    async function findEditor() {
        const response = await api.get<IEditor>(`/editores/${_idEditor}`)
        console.log(response)
        setEditor(response.data)
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

    const contos = conto.filter(conto =>  conto._editor._idEditor === 1)
    console.log(contos)

    function viewConto(_idConto: number) {
        history.push(`/contos/${_idConto}`)
    }

    function EditarConto(_idConto: number) {
        history.push(`/contosForm/${_idConto}`)
    }


    return (
            <div className="container">
                < br/>
                <h1 className="text-center">Nome do Editor:{editor?._nome}</h1>
                <br />
                <Table striped bordered hover className="text-center">
                <thead>
                    <tr> 
                        <th>TÍTULO</th>
                        <th>NÚMERO REVISTA</th>
                        <th>REGISTRO ISBN</th>
                        <th>AUTOR</th>
                        <th>SINOPSE</th>
                        <th>CONTEÚDO</th>
                        <th>DATA DA POSTAGEM</th>
                        <th>DATA DA ATUALIZAÇÃO</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            contos.map((contos, _numeroRevista, _idEditor) => (
                                <tr>
                                    <th>{contos._nomeConto}</th>
                                    <th>{contos._numeroRevista._numeroRevista}</th>
                                    <th>{contos._registroISBN}</th>
                                    <th>{contos._autor}</th>
                                    <th className="text-justify">{contos._sinopse}</th>
                                    <th className="text-justify">{contos._conteudo}</th>
                                    <th>{formatDate(contos._dataCriacao)}</th>
                                    <th>{formatDate(contos._dataUpdate)}</th>
                                    <td>
                                        <Button size="sm" variant="info" onClick={() => viewConto(contos._idConto)}>Visualizar</Button>{' '}
                                        <br/>
                                        <Button size="sm" variant="info" onClick={() => EditarConto(contos._idConto)}>Editar</Button>{' '}
                                    </td>
                                </tr>
                                    ))
                        }
                </tbody>
                </Table>
            </div>
            )
}
export default Editor
