import IEditorForm from "./IEditorForm";

export default interface IContoForm {
    _nomeConto: string;
    _registroISBN: string;
    _autor: string;
    _sinopse: string;
    _editor: IEditorForm;
}