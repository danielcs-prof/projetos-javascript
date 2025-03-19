// Define a class Pessoa que representa uma pessoa com várias propriedades
class Pessoa {
    constructor(nome, email, idade, sexo, cidade, interesses, mensagem) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.sexo = sexo;
        this.cidade = cidade;
        this.interesses = interesses;
        this.mensagem = mensagem;
    }
}

// Define uma classe PessoaController que gerencia uma lista de pessoas
class PessoaController {
    constructor() {
        this.pessoas = []; // Inicializa um array vazio para armazenar pessoas
        this.init(); // Chama o método init para configurar os event listeners
    }

    // Configura os event listeners para os botões
    init() {
        document.getElementById('btnSalvar').addEventListener('click', (e) => this.salvar(e));
        document.getElementById('btnExcluir').addEventListener('click', (e) => this.excluir(e));
        document.getElementById('btnListar').addEventListener('click', (e) => this.listar(e));
        document.getElementById('btnCarregar').addEventListener('click', (e) => this.carregarDados(e));
    }

    // Salva uma nova pessoa na lista
    salvar(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const idade = document.getElementById('idade').value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const cidade = document.getElementById('cidade').value;
        const interesses = Array.from(document.querySelectorAll('input[name="interesses[]"]:checked')).map(el => el.value);
        const mensagem = document.getElementById('mensagem').value;

        // Cria uma nova instância de Pessoa e adiciona à lista
        const pessoa = new Pessoa(nome, email, idade, sexo, cidade, interesses, mensagem);
        this.pessoas.push(pessoa);
        this.atualizarTabela(); // Atualiza a tabela com a nova lista de pessoas
    }

    // Exclui a última pessoa da lista
    excluir(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        this.pessoas.pop(); // Remove a última pessoa da lista
        this.atualizarTabela(); // Atualiza a tabela com a nova lista de pessoas
    }

    // Lista todas as pessoas na tabela
    listar(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        this.atualizarTabela(); // Atualiza a tabela com a lista de pessoas
    }

    // Carrega dados de um arquivo (função ainda não implementada)
    carregarDados(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        alert('Função carregarDados ainda não implementada.'); // Exibe um alerta informando que a função não está implementada
    }

    // Atualiza a tabela com a lista de pessoas
    atualizarTabela() {
        const tabela = document.getElementById('tabela');
        tabela.innerHTML = ''; // Limpa a tabela existente
        this.pessoas.forEach((pessoa, index) => {
            const row = tabela.insertRow(); // Insere uma nova linha na tabela
            row.insertCell(0).innerText = index + 1; // Insere o índice da pessoa
            row.insertCell(1).innerText = pessoa.nome; // Insere o nome da pessoa
            row.insertCell(2).innerText = pessoa.email; // Insere o email da pessoa
            row.insertCell(3).innerText = pessoa.idade; // Insere a idade da pessoa
            row.insertCell(4).innerText = pessoa.sexo; // Insere o sexo da pessoa
            row.insertCell(5).innerText = pessoa.cidade; // Insere a cidade da pessoa
        });
    }
}

// Adiciona um event listener para o evento DOMContentLoaded para inicializar o PessoaController quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new PessoaController();
});