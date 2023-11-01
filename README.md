

# Readme do Projeto clima_cidades

Este é um projeto simples que demonstra a criação de um "card de clima" que exibe informações meteorológicas de uma cidade específica. O projeto utiliza a API OpenWeatherMap para obter os dados climáticos e exibi-los na tela.

## Pré-requisitos
Antes de executar este projeto, é importante ter em mente que você precisará de uma chave de API válida da OpenWeatherMap para obter os dados climáticos. Certifique-se de obter uma chave em [OpenWeatherMap API](https://openweathermap.org/api) e substituir a variável `key` no código pelo valor da sua chave.

```javascript
const key = 'sua_chave_de_api_aqui';
```

## Como funciona
O código JavaScript neste projeto faz o seguinte:

1. Ele seleciona o botão de envio de formulário e define um ouvinte de evento para ele.

2. Quando o botão é clicado, ele coleta a cidade inserida pelo usuário a partir de um campo de entrada.

3. Em seguida, ele faz uma chamada à API da OpenWeatherMap usando a chave de API e a cidade inserida para obter os dados meteorológicos.

4. Após receber os dados da API, ele chama a função `colocarDadosNaTela` para exibir as informações na página HTML.

5. Os dados são exibidos em um "card de clima" que inclui o nome da cidade, temperatura atual, temperatura mínima, temperatura máxima, descrição do clima, umidade e um ícone representando o clima atual.

## Estrutura do Card de Clima
O "card de clima" é composto por vários elementos HTML que são preenchidos com os dados obtidos da API. Aqui estão os principais elementos exibidos no card:

- Nome da cidade.
- Temperatura atual em graus Celsius.
- Temperatura mínima em graus Celsius.
- Temperatura máxima em graus Celsius.
- Descrição do clima.
- Umidade em porcentagem.
- Ícone do clima.

## Como Usar
Para usar este projeto, siga estas etapas:

1. Obtenha uma chave de API da OpenWeatherMap em [OpenWeatherMap API](https://openweathermap.org/api).

2. Substitua a variável `key` no código JavaScript pelo valor da sua chave de API.

3. Abra o arquivo HTML em seu navegador.

4. Insira o nome da cidade desejada no campo de entrada.

5. Clique no botão "Enviar" para obter os dados climáticos e exibi-los no "card de clima".

Este projeto é uma introdução simples à integração de APIs e à exibição de dados em uma página da web. Você pode estender e personalizar este projeto adicionando mais recursos, como previsão do tempo de vários dias, seleção de unidades de temperatura, ou exibição de informações adicionais.
