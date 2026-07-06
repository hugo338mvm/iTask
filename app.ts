class Tarefa {
    titulo: string;
    descricao: string;
    dataCriacao: Date;
    dataConclusao: Date | null;
    concluida: boolean;

    constructor(titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataCriacao = new Date();
        this.dataConclusao = null;
        this.concluida = false;
    }

    renderizar(): HTMLElement {
        const card = document.createElement('div');
    card.classList.add('tarefa');

    const btnRemover = document.createElement('button');
    btnRemover.classList.add('btn-remover');
    btnRemover.textContent = '−';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const titulo = document.createElement('h3');
    titulo.classList.add('titulo-tarefa');
    titulo.textContent = this.titulo;

    const descricao = document.createElement('p');
    descricao.textContent = this.descricao;

    const dataCriacao = document.createElement('small');
    dataCriacao.textContent = `Criada em: ${this.dataCriacao.toLocaleString('pt-BR')}`;

    const dataConclusao = document.createElement('small');
    dataConclusao.classList.add('data-conclusao');
    dataConclusao.style.display = 'none';

    checkbox.addEventListener('change', () => {
        this.concluida = checkbox.checked;
        card.classList.toggle('concluida', this.concluida);

        if (this.concluida) {
            this.dataConclusao = new Date();
            dataConclusao.textContent = `Concluída em: ${this.dataConclusao.toLocaleString('pt-BR')}`;
            dataConclusao.style.display = 'block';
        } else {
            this.dataConclusao = null;
            dataConclusao.style.display = 'none';
        }
    });

    btnRemover.addEventListener('click', () => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.remove();
        }, 400);
    });

    card.appendChild(btnRemover);
    card.appendChild(checkbox);
    card.appendChild(titulo);
    if (this.descricao) {
        card.appendChild(descricao);
    }
    card.appendChild(dataCriacao);
    card.appendChild(dataConclusao);

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
