import { UsuarioRegisterType, UsuarioResponseType } from "../auth";

export interface AnimalRequestBodyType {
    name: string,
    comportamentos: string[],
    foto: string,
    castrado: boolean,
    vermifugado: boolean,
    vacinado: boolean,
    especie: string,
    raca: string,
    porte: string,
    descricao: string,
    idade: number,
}

export interface AnimalResponseType {
    id: number,
    name: string,
    dono: UsuarioResponseType,
    comportamentos: string[],
    foto: string,
    castrado: boolean,
    vermifugado: boolean,
    vacinado: boolean,
    especie: string,
    raca: string,
    porte: string,
    descricao: string,
    idade: number,
    status: string,
}

export interface RegistroResponseType {
    id: number,
    adotante: UsuarioResponseType,
    doador: UsuarioResponseType,
    data: string,
    protocolo: string,
    animal: AnimalResponseType,
}