export default class Pessoa {
    constructor(_nome) {
        this.nome = _nome;
    }

    toString() {
        return `Pessoa: ${this.nome}`;
    }
}