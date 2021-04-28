import IRevista  from './IRevista'
import IEditor from './IEditor'
import IDesigner from './IDesigner'
import IRevisor from './IRevisor'
import IRa from './IRa'

export default interface IConto {
    _idConto: number;
    _nomeConto: string;
    _numeroRevista: IRevista;
    _registroISBN: string;
    _autor: string;
    _editor: IEditor;
    _revisor: IRevisor;
    _designer: IDesigner;
    _sinopse: string;
    _conteudo: Text;
    _dataCriacao: Date;
    _dataUpdate: Date;
    _urlDaRa: IRa;
}