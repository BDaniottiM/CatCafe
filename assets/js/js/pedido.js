var btnPedido = $("#btnPedido");
var nomePedido = $("#nome-pedido");
var telefonePedido = $("#telefone-pedido");
var enderecoPedido = $("#end-pedido");
var alertaSucesso = $("#alertaSucesso");
alertaSucesso.css("display", "none");
var observacoes = $("#obs");
alertaSucesso.css('display',"none");

btnPedido.click(() =>{
    var linhaTabela = document.querySelectorAll("#linha-tabela");
    let itens = []

    

    for (let index = 0; index < linhaTabela.length; index++) {
        const element = linhaTabela[index];
        let itemNome = element.querySelector("#dados-venda-nome").textContent
        let itemQuantidade = element.querySelector("#dados-venda-quantidade").textContent
        let itemValor= element.querySelector("#dados-venda-valor").textContent
        itens.push({item: itemNome, quantidade: itemQuantidade, valor: itemValor})
    }
    if (nomePedido.val().length > 0 && enderecoPedido.val().length > 0) {
        $.ajax({
            type: 'POST',
            url: 'https://discordapp.com/api/webhooks/951966009655451659/fIiELLnA6LKTv4Oue8JvaVvq3q52vtp1FMQpXpuQvnzvs5WzC35ZGHtFEUUoJ9DYI8ni',
            data: JSON.stringify(gerarEmbed(nomePedido.val(),telefonePedido.val(), enderecoPedido.val(), observacoes, itens)),
            success: function(data) {
                var alertaSucesso = $("#alertaSucesso");
                nomePedido.val("");
                telefonePedido.val("")
                enderecoPedido.val("");
                observacoes.val("")
                alertaSucesso.css("display", "block");
                setTimeout(() => {
                  alertaSucesso.hide()
                }, 15000);
             },
            contentType: "application/json",
            dataType: 'json'
        });
    }else{
    }

    
});





function gerarEmbed(nomeCliente, telefoneCliente, enderecoCliente, observacoes, itens = []) {
    let jsonBase = {
        "username": "Delivery",
        "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFzg7tNBHa8UkeQCQsZ6MWYnzlaeLdir29-YcF_mWNd-IUKmzkMsZ5d4wPtwdj4pVUY8&usqp=CAU",
        "content": "<@&872401707886329856>",
        "embeds": [
          {
            "title": "PEDIDO #" + getRandomizer(100000,999999),
            "color": 16777215,
            "description": "",
            "timestamp": window.moment().format('YYYY-MM-DDTHH:mm:ss.MSSZ'),
            "author": {
              "name": ""
            },
            "image": {},
            "thumbnail": {},
            "footer": {},
            "fields": [
              {
                "name": ":grinning: Cliente",
                "value": "Nome Cliente"
              },
              {
                "name": ":telephone: Telefone",
                "value": "923019",
                "inline": true
              },
              {
                "name": ":house:  Endereço",
                "value": "dfsdfsdsdfsdf",
                "inline": true
              }
            ]
          },
          {
            "color": 16773360,
            "timestamp": "",
            "author": {},
            "image": {},
            "thumbnail": {},
            "footer": {},
            "fields": [
            ]
          },
          {
            "color": 15844367,
            "timestamp": "",
            "author": {},
            "image": {},
            "thumbnail": {},
            "footer": {},
            "fields": [
              {name: "Observações", value: "N/A"}
            ]
          },
          {
            "color": 5763719,
            "timestamp": "",
            "author": {},
            "image": {},
            "thumbnail": {},
            "footer": {},
            "fields": [
              {name: "Total", value: "0"}
            ]
          }
        ],
        "components": []
      }

    jsonBase.embeds[0].fields[0].value = nomeCliente;
    jsonBase.embeds[0].fields[1].value = telefoneCliente;
    jsonBase.embeds[0].fields[2].value = enderecoCliente;
    

    listaItems = []
    let totalCompra = 0
    for (let index = 0; index < itens.length; index++) {
        const item = itens[index];
        const valorItem = parseInt(item.valor.replace(/\D/g, ""));
        totalCompra += valorItem;
        listaItems.push({name: item.item, value: "Quantidade: " + item.quantidade, inline: "true"})
    }
    jsonBase.embeds[1].fields = listaItems;
    if (observacoes.val().length > 0) {
      jsonBase.embeds[2].fields[0].value = observacoes.val()
    }
    jsonBase.embeds[3].fields[0].value = "$ " + totalCompra.toString()
    return jsonBase
}


function getRandomizer(bottom, top) {
      return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}