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