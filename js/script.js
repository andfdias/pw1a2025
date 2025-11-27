const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const form = document.querySelector('.informação');

const fetchPokemon =  async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    if (APIresponse.status == 200){
        

    const data = await APIresponse.json();  
    return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'loading...';
    const data = await fetchPokemon(pokemon);

    if (data) {

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';

    } else {
        pokemonName.innerHTML = 'Not found :c';
        pokemonName.innerHTML = '';

    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderPokemon(input.value);  
});

renderPokemon('1')



