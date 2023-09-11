export interface EnderecoType {
    logradouro: string,
    complemento: string,
    bairro: string,
    numero: string,
    uf: string,
    cep: string
}

export interface UsuarioRegisterType {
    nome: string,
    telefone: string,
    email: string,
    endereco: EnderecoType,
    descricao: string,
}

export interface UsuarioResponseType {
    id: number,
    nome: string,
    telefone: string,
    email: string,
    endereco: EnderecoType,
    descricao: string,
}