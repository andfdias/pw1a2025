const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const formtype = document.querySelector('.pokemon_type');
const inputtype = document.querySelector('.input_pokemon');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next'); 


let searchPokemon = 1;

const fetchPokemon =  async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

   

        
    if (APIresponse.status == 200){
        

    const data = await APIresponse.json();  
    return data;
    }
   
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'loading...';
    pokemonNumber.innerHTML = 'loading...';
    formtype.innerHTML = 'loading...';
    const data = await fetchPokemon(pokemon);



    if (data) {

    pokemonImage.style.display = 'block';   
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];


    formtype.innerHTML = data.types.map((type) => type.type.name).join(', ');;
    
    input.value = '';
    searchPokemon = data.id;

   

    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found ';
        pokemonNumber.innerHTML = '';
        formtype.innerHTML = '';

    }
}


   

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());  
});

buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }   
      
});
buttonNext.addEventListener('click', () => {
   searchPokemon += 1;
   renderPokemon(searchPokemon);
      
});

renderPokemon('1')

