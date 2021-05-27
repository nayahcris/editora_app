/* eslint-disable */
import React, { useState, useEffect, ChangeEvent } from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import { Button, Form } from 'react-bootstrap'
import api from '../../services/api'
import IContoFormEditor from '../../interfaces/IContoFormEditor'
import IEditor from '../../interfaces/IEditor'

const ContosFormEditor: React.FC = () => {
    
    const history = useHistory()
    const { _idConto } = useParams<{ _idConto: string }>()
    const [modelEditor, setModelEditor] = useState<IEditor>({
        _idEditor: 0,
        _idPessoa: 0,
        _nome: '',
        _nomeSocial: '',
        _genero: '',
        _email: '',
        _telefone: 0,
        _whatsapp: 0,
        _nickname: '',
        _idFuncionario: 0,        
        _salario: 0,
        _pis: 0,
        _cpf: 0,
        _rg: 0,
        _carteiraDeTrabalho: 0,
        _nomeMae: '',
        _nomePai: ''
    })
    const [model, setModel] = useState<IContoFormEditor>({
        _editor: modelEditor})


        
    return (
            <h1>Confirme editor</h1>

)
}

export default ContosFormEditor