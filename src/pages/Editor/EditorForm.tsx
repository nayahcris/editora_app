/* eslint-disable */
import React, { useState, useEffect, ChangeEvent } from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import { Button, Form } from 'react-bootstrap'
import api from '../../services/api'
import IQRcodeForm from '../../interfaces/IQRcodeForm'


const EditorForm: React.FC = () => {

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


    return ( 
    <div className="container">
    <br/>
    <div className="task-header">
        <h3>Adicionar Editor</h3>
        <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
    </div>
    <br/>
    <div className="container">
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label>Nome completo</Form.Label>
                <Form.Control 
                    type="text" 
                    name="_nome"
                    value={model._nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Nome Social</Form.Label>
                <Form.Control 
                    type="text" 
                    name="_autor"
                    value={model._urlDoArquivo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                />
               </Form.Group>
               
                <Form.Group>
                <Form.Label>Nickname</Form.Label>
                <Form.Control 
                    type="text" 
                    name="_autor"
                    value={model._urlDoArquivo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                />
            </Form.Group>
            <Form.Group>
            <Form.Label>Gênero</Form.Label>
                <Form.Control as="select">
                    <option>Feminino</option>
                    <option>Masculino</option>
                    <option>Não-Binário</option>
                 </Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control type="date" />
            </Form.Group
            >
            <Form.Group>
            <Form.Label>E-mail</Form.Label>
                <Form.Control type="e-mail" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Telefone</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>WhatsApp</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Salário</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>PIS</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>CPF</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>RG</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Carteira de Trabalho</Form.Label>
                <Form.Control type="number" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Nome da Mãe</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Nome do Pai</Form.Label>
                <Form.Control type="text" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Salvar
            </Button> { }

        </Form>

    </div>
</div>
);
}

export default EditorForm