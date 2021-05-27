/* eslint-disable */
import React, { useState, useEffect, ChangeEvent } from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import { Button, Form } from 'react-bootstrap'
import api from '../../services/api'
import IQRcodeForm from '../../interfaces/IQRcodeForm'


const QRcodeForm: React.FC = () => {

    const history = useHistory()
    const { _idQRcode } = useParams<{ _idQRcode: string }>()
    const [model, setModel] = useState<IQRcodeForm>({
        _nome: '',
        _urlDoArquivo: ''
    })

    useEffect(() => {
        if (_idQRcode !== undefined) {
            findConto(_idQRcode)
        }
    }, [_idQRcode])

    function updatedModel (e: ChangeEvent<HTMLInputElement>) {

        setModel({
            ...model,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (_idQRcode !== undefined) {
        
            const response = await api.put(`/qrcodes/${_idQRcode}`, model)
        } else {

            const response = await api.post('/qrcodes', model)
        }
        back()

    }

    async function findConto (_idQRcode: string) {
        const response = await api.get(`qrcodes/${_idQRcode}`)
        setModel({
            _nome: response.data._nome,
            _urlDoArquivo: response.data._urlDoArquivo,
        })
    }

    function back () {
        history.goBack()
    }

    
    //function goToNext () {
      //  history.push('/editor-texto')
    //}


    return ( <div className="container">
    <br/>
    <div className="task-header">
        <h3>New Task</h3>
        <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
    </div>
    <br/>
    <div className="container">
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Nome Referente ao QRCODE</Form.Label>
                <Form.Control 
                    type="text" 
                    name="_nome"
                    value={model._nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Autor</Form.Label>
                <Form.Control 
                    type="text" 
                    name="_autor"
                    value={model._urlDoArquivo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                />
            </Form.Group>
            <Button variant="dark" type="submit">
                Salvar
            </Button> { }

        </Form>
    </div>
</div>
);
}

export default QRcodeForm