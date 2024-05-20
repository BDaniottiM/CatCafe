function itemLista(nomeItem,quantidade,valor) {
    let html = `<tr class="linha-tabela" id="linha-tabela">
    <td id="dados-venda-nome">${nomeItem}</td>
    <td id="dados-venda-quantidade">${quantidade}</td>
    <td id="dados-venda-valor">$ ${valor}</td>
</tr>`
    return $(html)
}