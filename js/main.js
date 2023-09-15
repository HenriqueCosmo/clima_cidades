
const formBtn = document.querySelector("#envioNome")
const key = 'e19949b2f5bbf124c9efaf5b77b31e6e';



async function carregarDadosCidade(cidade){
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then((response) => response.json())
    
    colocarDadosNaTela(dados)

    
}

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".textDetail").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = `Umidade:  ${dados.main.humidity}%`
    document.querySelector(".icone").src = ` https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = document.querySelector(".cidade").value;

    carregarDadosCidade(cidade);
    
});







