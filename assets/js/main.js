import Tarefa from "./Tarefa.js";

const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const btnCriar = document.getElementById('btnCriar');
const listaDeTarefas = document.getElementById('listaDeTarefas');
const arrayTarefas = [];

function criarElemento(tagDoElemento, classe = '') {
    const elementoLI = document.createElement(tagDoElemento);
    elementoLI.setAttribute('class', classe);
    return elementoLI;
}

function limparCaixaDeTexto(inputDeTexto) {
    inputDeTexto.value = '';
}

function carregarTarefas() {
    listaDeTarefas.innerHTML = '';

    for (let item of arrayTarefas) {
        const h1 = criarElemento('h1');
        const titulo = document.createTextNode(item.titulo);
        h1.appendChild(titulo);

        const p = criarElemento('p');
        const descricao = document.createTextNode(item.descricao);
        p.appendChild(descricao);

        const pData = criarElemento('p', 'data');
        const data = document.createTextNode(item.data.toLocaleDateString());
        pData.appendChild(data);

        let indice = arrayTarefas.indexOf(item);
        const btn = criarElemento('button', 'btn-excluir');
        btn.addEventListener('click', () => excluirTarefa(indice));
        const texto = document.createTextNode('Excluir');
        btn.appendChild(texto);


        const li = criarElemento('li', 'caixa bg-branco');
        li.appendChild(h1);
        li.appendChild(p);
        li.appendChild(pData);
        li.appendChild(btn);

        listaDeTarefas.appendChild(li);
    }
}

carregarTarefas();

function criarTarefa(titulo, descricao) {
    const novaTarefa = new Tarefa(titulo.value, descricao.value);
    arrayTarefas.push(novaTarefa);

    carregarTarefas();
    limparCaixaDeTexto(titulo);
    limparCaixaDeTexto(descricao);
    titulo.focus();
}

export function excluirTarefa(indice) {
    arrayTarefas.splice(indice, 1);
    carregarTarefas();
}

btnCriar.addEventListener('click', evento => {
    evento.preventDefault();
    criarTarefa(titulo, descricao);
});