
const formBtn = document.querySelector("#envioNome")



async function carregarDadosCidade(cidade){
    const key = 'e19949b2f5bbf124c9efaf5b77b31e6e';
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

}


formBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const cidade = document.querySelector(".cidade").value;

    carregarDadosCidade(cidade);
    
});







