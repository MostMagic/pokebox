var text = document.getElementById("text")
var principal = document.getElementById("principal")
var pokebox = document.getElementById("pokebox")

principal.addEventListener("click", function () {
    let textvalue = text.value

    fetch('https://pokeapi.co/api/v2/pokemon/' + textvalue)
        .then(response => response.json())
        .then(data => {
            console.log(data.sprites.front_default)
            var pokemonIMG = data.sprites.front_default
            pokebox.innerHTML = '<img src="' + pokemonIMG + '" alt="" id="sprite" style="width: 175px; height: 175px; margin-top: 5px;">'

        })
        .catch(error => console.error('Erro:', error));


})