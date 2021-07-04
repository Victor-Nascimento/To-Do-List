const _titulo = Symbol('tarefa');
const _descricao = Symbol('descricao');
const _data = Symbol('data');

export default class Tarefa {
    constructor(titulo, descricao){
        this[_titulo] = titulo;
        this[_descricao] = descricao;
        this[_data] = new Date();
    }

    get titulo() {
        return this[_titulo];
    }
    set titulo(valor){
        this[_titulo] = valor;
    }

    get descricao() {
        return this[_descricao];
    }
    set descricao(valor){
        this[_descricao] = valor;
    }

    get data() {
        return this[_data];
    }
}

