import { UsuarioResponseType } from "../auth";
import { MensagemResponseType } from "../mensagem";

export interface ChatResponseType {
    id: number,
    remetente: UsuarioResponseType,
    destinatario: UsuarioResponseType,
    mensagens: MensagemResponseType[]
}