import { UsuarioResponseType } from "../auth";

export interface MensagemResponseType {
    id: number,
    conteudoMsg: string,
    data: string,
    remetenteUsuario: UsuarioResponseType
}

export interface MensagemRequestType {
    conteudoMsg: string,
    data: string,
}

