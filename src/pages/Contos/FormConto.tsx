/* eslint-disable */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom' 
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api'
import IContoForm from '../../interfaces/IContoForm'
import IEditor from '../../interfaces/IEditor'

const Task: React.FC = () => {

    const history = useHistory()
    const { _idConto } = useParams<{ _idConto: string }>()
    const [editor, setEditor] = useState<IEditor[]>([])
    const [model, setModel] = useState<IContoForm>({
        _nomeConto: '',
        _registroISBN: '',
        _autor: '',
        _sinopse: '', 
        _editor: {
            _idEditor: 0
        }
    })

    useEffect(() => {
        if (_idConto !== undefined) {
            findConto(_idConto)
        }
    }, [_idConto])

    function updatedModel (e: ChangeEvent<HTMLInputElement>) {

        setModel({
            ...model,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (_idConto !== undefined) {
        
            const response = await api.put(`/contos/${_idConto}`, model)
        } else {

            const response = await api.post('/contos', model)
        }
        back()

    }

    async function findConto (_idConto: string) {
        const response = await api.get(`contos/${_idConto}`)
        setModel({
            _nomeConto: response.data._nomeConto,
            _registroISBN: response.data._registroISBN,
            _autor: response.data._autor,
            _sinopse: response.data._sinopse,
            _editor: response.data._editor
        })
    }

    function back () {
        history.goBack()
    }

    useEffect(() => {
        loadEditores()
    }, [])

    async function loadEditores(){
        const response = await api.get('/editores')
        console.log(response)
        setEditor(response.data)
    }

    return(
        <div className="container">
            <br/>
            <div className="task-header">
                <h3>New Task</h3>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br/>
            <div className="container">
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="_nomeConto"
                            value={model._nomeConto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Autor</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="_autor"
                            value={model._autor}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Registro ISBN</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="_registroISBN"
                            value={model._registroISBN}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Sinopse</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={model._sinopse}
                            name="_sinopse"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                        />
                    </Form.Group>

                    <Form.Group controlId="_idEditor">
                        <Form.Label>Editor</Form.Label>
                        <Form.Control 
                        as="select"
                        name="Editor_idEditor"
                        value={model._editor._idEditor}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} >
                        {
                            editor.map((editor, _idEditor) => 
                            <option>{editor._nome}</option>
                        )
                        }
                        </Form.Control>
                    </Form.Group>

                    <Button variant="dark" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Task;
