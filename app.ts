class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    concluida: boolean;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.concluida = false;
    }

    renderizar(): HTMLElement {
        const card = document.createElement('div');
        card.classList.add('tarefa');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const titulo = document.createElement('h3');
        titulo.textContent = this.titulo;

        const descricao = document.createElement('p');
        descricao.textContent = this.descricao;

        const data = document.createElement('small');
        data.textContent = this.dataCriacao.toLocaleString('pt-BR');

        checkbox.addEventListener('change', () => {
            this.concluida = checkbox.checked;
            card.classList.toggle('concluida', this.concluida);
        });

        card.appendChild(checkbox);
        card.appendChild(titulo);
        if (this.descricao) {
            card.appendChild(descricao);
        }
        card.appendChild(data);

        return card;
    }
}
const tarefas: Tarefa[] = [];

const inputTitulo = document.getElementById('input-titulo') as HTMLInputElement;
const inputDescricao = document.getElementById('input-descricao') as HTMLTextAreaElement;
const btnAdicionar = document.getElementById('btn-adicionar') as HTMLButtonElement;
const listaTarefas = document.getElementById('lista-tarefas') as HTMLDivElement;

btnAdicionar.addEventListener('click', () => {
    const titulo = inputTitulo.value.trim();
    const descricao = inputDescricao.value.trim();

    if (titulo === '') {
        alert('O título da tarefa é obrigatório!');
        return;
    }

    const novaTarefa = new Tarefa(titulo, descricao);
    tarefas.push(novaTarefa);

    listaTarefas.appendChild(novaTarefa.renderizar());

    inputTitulo.value = '';
    inputDescricao.value = '';
});
