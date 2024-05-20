// ID da sua planilha do Google Sheets
const SPREADSHEET_ID = "1YFvanisHpcrgnYRJUnms1PcjWe1zEAI0jXHsKKHpV7Q";
// Range dos dados que você quer obter
const RANGE = "Sheet1!A:A"; // Supondo que os dados estão na coluna A

const APIKEY = "AIzaSyC1IQHXJ_2Uta2d51L8pmwknl8BhyvH5UE";

// URL para fazer a solicitação HTTP para obter os dados da planilha
const url = `https://docs.google.com/spreadsheets/d/1YFvanisHpcrgnYRJUnms1PcjWe1zEAI0jXHsKKHpV7Q/edit#gid=0`;

// Função para carregar os dados da planilha e popular o dropdown list
function loadDropdown() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const values = data.values;
      const dropdown = document.getElementById("nome-funcionario");
      // Limpar o dropdown antes de adicionar novos itens
      dropdown.innerHTML = '<option value="">Selecione uma opção</option>';
      // Adicionar os itens do dropdown baseados nos dados da planilha
      if (values) {
        values.forEach((row) => {
          const option = document.createElement("option");
          option.text = row[0]; // Assumindo que cada linha contém apenas um valor
          dropdown.add(option);
        });
      }
    })
    .catch((error) => {
      console.error("Erro ao carregar os dados da planilha:", error);
    });
}

// Carregar os dados da planilha quando a página é carregada
window.onload = loadDropdown;
