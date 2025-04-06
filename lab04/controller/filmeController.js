import { Filme } from "../model/filme.js";



class FilmeController{
    constructor(){
        this.listaFilmes = [];
        this.init();
    }

    init(){
        // Adiciona event listeners para os botões
        const btnNovo = document.getElementById("btnNovo");
        const btnEditar = document.getElementById("btnEditar")
        btnNovo.addEventListener("click",(e) => this.abrirModalCadastro(e)); 
        btnEditar.addEventListener("click",(e)=> this.abrirModalEdicao(e))

        //document.getElementById("btnNovo").addEventListener("click",(e) => this.abrirModalCadastro(e));
        //document.getElementById("btnSalvarFilme").addEventListener('click',(e)=>this.salvar(e));
        //document.getElementById("btnExcluirFilme").addEventListener('click',(e)=>this.excluir(e));
    }
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    salvar(e){}
    excluir(e){}
    editar(e){}
    listarTodos(e){}
    filtrarTitulo(e){}
    filtrarGenero(e){}
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    carregarComboBoxModal(){}
    abrirModalCadastro(e){
        console.log("abrindo modal de cadastro");
        document.getElementById("idModalFilmeTitulo").textContent = "Cadastrar Filme"   
    }
    abrirModalEdicao(e){
        console.log("abrindo modal de edição")
        document.getElementById("idModalFilmeTitulo").textContent = "Editar Filme"
    }
    atualizarTabela(){}

}
// Adiciona um event listener para o evento DOMContentLoaded para inicializar o FilmeController quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const filmeController = new FilmeController();
    window.filmeController = filmeController; // Expose it globally if needed
});
