// URL de base da API
const base_url = 'https://pokeapi.co/api/v2/pokemon/';

//Elementos da DOM
const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const pokemonCard = document.getElementById("pokemonCard");

//Elementos do Card
const pokemonName = document.getElementById("pokemonName");
const pokemonNumber = document.getElementById("pokemonNumber");
const pokemonSprite = document.getElementById("pokemonSprite");
const pokemonHeight = document.getElementById("pokemonHeight");
const pokemonWeight = document.getElementById("pokemonWeight");
const pokemonTypes = document.getElementById("pokemonTypes");


// Funções de exibição
function showLoading() {
    loading.classList.remove('hidden');
    pokemonCard.classList.add('hidden');
    error.classList.add('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

function showError() {
    hideLoading();
    pokemonCard.classList.add('hidden');
    error.classList.remove('hidden');
}

function hideError() {
    error.classList.add('hidden');
}

// Função principal para buscar Pokemon
async function fetchPokemon(pokemon) {
    try {
        showLoading();
        
        // Faz requisição para a API
        const response = await fetch(`${base_url}${pokemon.toLowerCase()}`);
        
        // Verifica se a requisição deu certo
        if (!response.ok) {
            throw new Error('Pokemon não foi encontrado');
        }
        
        // Converte a resposta para JSON
        const data = await response.json();
        
        // Exibe os dados do Pokemon
        infoPokemon(data);
        
    } catch (err) {
        showError();
    }
}

// Função para exibir as informações do Pokemon
function infoPokemon(data) {
    // Preenche os elementos com os dados do Pokemon pesquisado
    pokemonName.textContent = data.name;
    pokemonNumber.textContent = `#${data.id.toString().padStart(3, '0')}`;
    pokemonSprite.src = data.sprites.front_default;
    pokemonSprite.alt = `Sprite de ${data.name}`;
    pokemonHeight.textContent = `${data.height / 10} m`;
    pokemonWeight.textContent = `${data.weight / 10} kg`;
    
    // Formata os tipos do Pokemon pesquisado
    const types = data.types.map(type => type.type.name).join(', ');
    pokemonTypes.textContent = types;
    
    // Exibe o card do Pokemon
    hideLoading();
    hideError();
    pokemonCard.classList.remove('hidden');
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const pokemon = pokemonInput.value.trim();
    if (pokemon) {
        fetchPokemon(pokemon);
    }
});

pokemonInput.addEventListener('keypress', (e) => { // Permite buscar pressionando Enter
    if (e.key === 'Enter') {
        const pokemon = pokemonInput.value.trim();
        if (pokemon) {
            fetchPokemon(pokemon);
        }
    }
});

// Pokemon de demonstração
fetchPokemon('charizard');