import IRevista  from './IRevista'

export default interface IConto {
    _idConto: number;
    _nomeConto: string;
    _numeroRevista: IRevista;
    _registroISBN: string;
    _autor: string;
    _sinopse: string;
    _conteudo: Text;
    _dataCriacao: Date;
    _dataUpdate: Date;
}