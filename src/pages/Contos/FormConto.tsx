import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import api from '../../services/api'
import IConto from '../../interfaces/IConto'
import IEditor from '../../interfaces/IEditor'
import {Form, Button} from 'react-bootstrap'
import IRevisor from "../../interfaces/IRevisor"



const ContosForm: React.FC = () => {
    
    const { _idConto } = useParams <{ _idConto: string }>()
    const [conto, setConto] = useState<IConto>()
    const [editor, setEditor] = useState<IEditor[]>([])
    const [revisor, setRevisor] = useState<IRevisor[]>([])
    const [designer, setDesigner] = useState<IRevisor[]>([])


    useEffect(() => {
        loadEditores()
    }, [])

    async function loadEditores(){
        const response = await api.get('/editores')
        console.log(response)
        setEditor(response.data)
    }

    useEffect(() => {
        loadRevisores()
    }, [])

    async function loadRevisores(){
        const response = await api.get('/revisores')
        console.log(response)
        setRevisor(response.data)
    }


    useEffect(() => {
        loadDesigners()
    }, [])

    async function loadDesigners(){
        const response = await api.get('/designers')
        console.log(response)
        setDesigner(response.data)
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

    async function salvaConto() {

        const response = await api.post<IConto>(`/contos`)
        console.log(response)
        setConto(response.data)
    }

    const nomeConto = conto?._nomeConto
    const autorConto = conto?._autor
    //const revistaConto = conto?._numeroRevista._numeroRevista

    return <div className="container">
                <h1 className="text-center">Edição de Conto</h1>

                <Form>
                    <Form.Group controlId="_nomeConto">
                        <Form.Label>Nome do Conto</Form.Label>
                        <Form.Control  placeholder={nomeConto}/>
                    </Form.Group>
                    <Form.Group controlId="_autor">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control  placeholder={autorConto} />
                    </Form.Group>
                    <Form.Group controlId="_numeroRevista">
                        <Form.Label>Revista</Form.Label>
                        <Form.Control  placeholder={"NÚMERO DA REVISTA"} />
                    </Form.Group>
                    <Form.Group controlId="_idConto">
                        <Form.Label>Registro ISBN</Form.Label>
                        <Form.Control  placeholder={"REGISTRO ISNBN"} />
                    </Form.Group>
                    <Form.Group controlId="_dataCriacao">
                        <Form.Label>Data da Criação</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="_dataUpdate">
                        <Form.Label>Data da Atualização</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group controlId="_idEditor">
                        <Form.Label>Editor</Form.Label>
                        <Form.Control as="select">
                        {
                            editor.map((editor, _idEditor) => 
                            <option>{editor._nome}</option>
                        )
                        }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="_idRevisor">
                        <Form.Label>Revisor</Form.Label>
                        <Form.Control as="select">
                        {
                            revisor.map((revisor, _idRevisor) => 
                            <option>{revisor._nome}</option>
                        )
                        }
                        </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="_idEditor">
                        <Form.Label>Designer</Form.Label>
                        <Form.Control as="select">
                        {
                            designer.map((designer, _idDesigner) => 
                            <option>{designer._nome}</option>
                        )
                        }
                        </Form.Control>    
                    </Form.Group>
                    <Form.Group controlId="_sinopse">
                        <Form.Label>Sinopse</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="_conteudo">
                        <Form.Label>Conto</Form.Label>
                        <Form.Control as="textarea" rows={5} />
                    </Form.Group>
                    </Form>
                    <Button type="submit" onClick={salvaConto}>Salvar</Button>
           </div>

}

export default ContosForm
