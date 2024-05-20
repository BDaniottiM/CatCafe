//let produtos = $('.item-menu');
let inputClient = $("#nome-cliente");
let inputFuncionario = $("#nome-funcionario");
let dadosVendaCliente = $("#dados-nome-cliente");
let dadosVendaFuncionario = $("#dados-nome-funcionario");
let dadosHoraVenda = $("#dados-hora-venda");
//let listaCompras = $('#itens-tabela');
//let totalVenda = $("#total-venda");
var btnGerar = $("#btn-gerar");
var btnCopiar = $("#btn-copiar");
var controleItems = {};
var nomeCliente = $("#nome-cliente");
var nomeFuncionario = $("#nome-funcionario");
var notaFiscal = $("#nota-fiscal");
var btnZerar = $("#btn-zerar");
var checkHospital = $("#btnradio2");
var checkNormal = $("#btnradio1");
var checkDiabetico = $("#btnradio3");
var checkPromoDiabetico = $("#btnradio4");
var alertaErro = $("#alertaErro");
alertaErro.css("display", "none");

$(document).ready(function () {
  produtos.each((index, item) => {
    let produto = item;
    let jqueryProduto = $(item.querySelector("#nome-item"));
    const nomeProduto = jqueryProduto.attr("custom")
      ? jqueryProduto.attr("custom")
      : item.querySelector("#nome-item").textContent;
    const descProduto = item.querySelector("#desc-produto").textContent;
    var precoItem = "";
    setInterval(() => {
      precoItem = item
        .querySelector("#preco-item")
        .textContent.replace(/\D/g, "");
    }, 100);
    const quantidadeInput = $(item.querySelector("#qtd-produto"));
    const quantidadeProduto = item.querySelector("#qtd-produto").value;
    const btnAumentar = $(item.querySelector("#btnAumentar"));
    const btnDiminuir = $(item.querySelector("#btnDiminuir"));

    btnAumentar.click(() => {
      quantidadeInput.val(parseInt(quantidadeInput.val() - 1) + 1);
      atualizaDados(quantidadeInput, index, nomeProduto, precoItem);
    });

    btnDiminuir.click(() => {
      quantidadeInput.val(parseInt(quantidadeInput.val() - 1) + 1);
      atualizaDados(quantidadeInput, index, nomeProduto, precoItem);
    });

    btnCopiar.click(() => {
      copyToClipboard(notaFiscal.val());
      btnCopiar.css("background", "var(--bs-teal)");
      btnCopiar.text("Copiado!");
      setTimeout(() => {
        btnCopiar.css("background", "var(--bs-pink)");
        btnCopiar.text("Copiar");
      }, 1000);
    });

    quantidadeInput.on("input", () => {
      if (quantidadeInput.val() <= 0) {
        quantidadeInput.val(0);
      }
      if (controleItems[index]) {
        controleItems[index].remove();
        delete controleItems[index];
      }
      let novoItem = itemLista(
        nomeProduto,
        quantidadeInput.val(),
        quantidadeInput.val() * parseInt(precoItem)
      );
      listaCompras.append(novoItem);
      controleItems[index] = novoItem;
      var map = new Map(Object.entries(controleItems));
      let total = 0;
      map.forEach((element) => {
        valor = element.find("#dados-venda-valor").text().replace(/\D/g, "");
        valor = parseInt(valor);
        total = total + valor;
      });
      totalVenda.text(`$ ${total}`);
    });
  });
});

checkNormal.change((e) => {
  if ($(e.target).prop("checked")) {
    produtos.each((index, item) => {
      const produto = $(item);
      let preco = produto.find("#preco-item");
      preco.text(`$ ${preco.attr("normal")}`);
    });
    document.getElementById("Cat-Cop").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("Frajola").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("cupcake").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("bolo").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("aniverssario").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("maca").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("misto").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("pao").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("cafe").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("batata").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("burguer").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("hotdog").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("espetinho").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("coxa").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("file").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("pipoca").style =
      "margin-right: -30px; display: flex!important";
    //document.getElementById("donuts").style = "margin-right: -30px; display: flex!important";
    //document.getElementById("kitkat").style = "margin-right: -30px; display: flex!important";
    //document.getElementById("peq").style = "margin-right: -30px; display: flex!important";
    document.getElementById("suco").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("coco").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("agua").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("tonica").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("ursinho").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("rosa").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("buque").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("milkshake").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("misto-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("suco-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("cafe-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("sorvete-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("picole-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("file-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("frango-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("espetinho-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("catburguer-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("batata-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("hotdog-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("catcake-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("cupcat-d").style =
      "margin-right: -30px; display: none!important";
  }
});

inputClient.on("input", () => {
  dadosVendaCliente.text(inputClient.val());
});

inputFuncionario.on("input", () => {
  dadosVendaFuncionario.text(inputFuncionario.val());
});

setInterval(() => {
  dadosHoraVenda.text(window.moment().format("DD/MM/YYYY HH:mm:ss"));
}, 1000);

function atualizaDados(quantidadeInput, index, nomeProduto, precoItem) {
  if (controleItems[index]) {
    controleItems[index].remove();
    delete controleItems[index];
  }

  if (parseInt(quantidadeInput.val()) > 0) {
    let novoItem = itemLista(
      nomeProduto,
      quantidadeInput.val(),
      quantidadeInput.val() * parseInt(precoItem)
    );
    listaCompras.append(novoItem);
    controleItems[index] = novoItem;
  }

  var map = new Map(Object.entries(controleItems));
  let total = 0;
  map.forEach((element) => {
    valor = element.find("#dados-venda-valor").text().replace(/\D/g, "");
    valor = parseInt(valor);
    total = total + valor;
  });
  totalVenda.text(`$ ${total}`);
}

btnZerar.on("click", () => {
  produtos.each((index, item) => {
    const quantidadeInput = $(item.querySelector("#qtd-produto"));
    quantidadeInput.val(0);
  });
  listaCompras.empty();
  inputClient.val("");
  inputFuncionario.val("");
  dadosVendaCliente.text("");
  dadosVendaFuncionario.text("");
  totalVenda.text("$0");
  controleItems = {};
  notaFiscal.val("");
  alertaErro.css("display", "none");
});

const { Client, MessageEmbed } = require("discord.js");
const client = new Client();

btnGerar.on("click", async (e) => {
  if (inputClient.val() == "" || inputFuncionario.val() == "") {
    alertaErro.css("display", "block");
    setTimeout(() => {
      alertaErro.hide();
    }, 10000);
  } else {
    let itensTabela = $(".linha-tabela");
    let itens = [];
    itensTabela.each((index, element) => {
      element = $(element);
      itens.push({
        nome: element.find("#dados-venda-nome").text(),
        quantidade: element.find("#dados-venda-quantidade").text(),
        valor: element.find("#dados-venda-valor").text(),
      });
    });
    if (itens.length == 0) {
      return;
    }

    let embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle("CUPOM FISCAL")
      .setDescription("UwU Cat Café")
      .addFields(
        { name: "Funcionário", value: nomeFuncionario.val() },
        { name: "Cliente", value: nomeCliente.val() },
        { name: "Data", value: window.moment().format("DD/MM/YYYY HH:mm") },
        {
          name: "Itens Comprados",
          value: itens
            .map((item) => `${item.quantidade}x ${item.nome} - ${item.valor}`)
            .join("\n"),
        },
        { name: "Total do Pedido", value: totalVenda.text() }
      );

    // Enviar o embed para o Discord
    const channel = client.channels.cache.get("ID_DO_CANAL"); // Coloque o ID do canal Discord
    await channel.send({ embeds: [embed] });
  }
});

client.login(
  "https://discord.com/api/webhooks/1228594984073171034/VZcEHcn74k0g8lDOHjmM-qp9oXLlyhwl8JVU02agceANjuIo6ohtXsT6eXh-TkGbI4l8"
); // Coloque o token do seu bot aqui

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
var entregaCheckbox = $("#entrega");

entregaCheckbox.change(() => {
  if (entregaCheckbox.prop("checked")) {
    var totalAtual = parseInt(totalVenda.text().replace(/\D/g, ""));
    totalVenda.text("$" + (totalAtual + 200));
  } else {
    var totalAtual = parseInt(totalVenda.text().replace(/\D/g, ""));
    totalVenda.text("$" + (totalAtual - 200));
  }
});
