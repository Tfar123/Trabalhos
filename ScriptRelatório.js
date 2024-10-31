// Função chamada ao carregar a página
window.onload = function() {
    exibirProdutosRelatorio();
};

// Função para exibir produtos na página de relatórios
function exibirProdutosRelatorio() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const tbody = document.getElementById('tbody-produtos');

    // Limpar a tabela antes de exibir novos produtos
    tbody.innerHTML = '';

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