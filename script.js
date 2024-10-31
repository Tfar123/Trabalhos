//-----------------início da Função do menu----------------
    function toggleMenu() {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
//------------------Fim da Função do menu-------------------




//------------------Início do modal ADM-------------------------
function toggleLoginModalADM() {
    var modal = document.getElementById('loginModalADM');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

//Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    var modal = document.getElementById('loginModalADM');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
//---------------Fim do modal ADM-----------------

//------------------Início do modal-------------------------
function toggleLoginModal() {
    var modal = document.getElementById('loginModal');
    modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';
}

//Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


//---------------Início da validação de login admin----------
function logarAdm(){
     var login = document.getElementById('loginADM').value;
     var senha = document.getElementById('senhaADM').value;
    
     if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "indexadmin.html"
        alert('Bem vindo a Página de Administrador')
     }else{
        alert('Usuário ou Senha incorretos')
     }
}

//---------------Início da validação de login normal----------
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
   
    if(login == "Tiago" && senha == "Tiago123"){
       alert('Sucesso');
       location.href = "index.html"
    }else{
       alert('Usuário ou Senha incorretos')
    }
}


//-------------Início da Função de cadastro----------------
function cadastrarProduto(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').value;

    const produto = {
        nome: nome,
        preco: parseFloat(preco),
        descricao: descricao,
        imagem: imagem
    };

    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || [];
    produtosCadastrados.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtosCadastrados));
    exibirProdutos(produtosCadastrados);
    document.getElementById('form-cadastro').reset();
}

function exibirProdutos(produtos) {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    produtos.forEach((produto, index) => {
        const novoProduto = document.createElement('li');
        
        novoProduto.innerHTML = `
            <strong>${produto.nome}</strong><br>
            Preço: R$ ${produto.preco.toFixed(2)}<br>
            Descrição: ${produto.descricao}<br>
            <img src="${produto.imagem}" alt="${produto.nome}" style="max-width: 100px; margin-top: 5px;"><br>
            <button onclick="editarProduto(${index})">Editar</button>
            <button onclick="excluirProduto(${index})">Excluir</button>
        `;

        listaProdutos.appendChild(novoProduto);
    });
}

function editarProduto(index) {
    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtosCadastrados[index];

    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('imagem').value = produto.imagem;

    // Remove o produto da lista atual para evitar que duplique
  
}   

    
function excluirProduto(index) {
    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos'));
    produtosCadastrados.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtosCadastrados));
    exibirProdutos(produtosCadastrados);
}

window.onload = function() {
    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || [];
    exibirProdutos(produtosCadastrados);
};


// Carregar produtos do localStorage ao iniciar a página
window.onload = function() {
    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || [];
    exibirProdutos(produtosCadastrados); // Exibir na página de cadastro

    // Se na página de relatórios, exibir os produtos na tabela
    if (document.getElementById('tbody-produtos')) {
        exibirProdutosRelatorio();
    }
};

// Função para exibir produtos na página de relatórios
function exibirProdutosRelatorio() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const tbody = document.getElementById('tbody-produtos');


    produtos.forEach(produto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.descricao}</td>
            <td><img src="${produto.imagem}" alt="${produto.nome}" style="max-width: 50px;"></td>
        `;
        tbody.appendChild(tr);
    });
}
//--------------------Fim da função de cadastro--------------------

