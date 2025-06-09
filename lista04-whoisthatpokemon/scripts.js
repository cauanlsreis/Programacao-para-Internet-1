const pokemonImg = document.getElementById('pokemon-image');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');

let currentPokemon = {
    id: null,
    name: null
};

function getRandomId() {
    return Math.floor(Math.random() * 250) + 1;
}

async function carregarPokemon() {
    // Limpa feedback e volta para silhueta antes de trocar a imagem
    document.getElementById('feedback').textContent = '';
    pokemonImg.classList.remove('revealed');

    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    nextBtn.disabled = true;

    const id = getRandomId();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    pokemonImg.src = imageUrl;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        currentPokemon.id = id;
        currentPokemon.name = data.name.toLowerCase();
        console.log('Pokémon atual:', currentPokemon.name); // Adicionado para mostrar o nome no console
    } catch (error) {
        document.getElementById('feedback').textContent = 'Erro ao carregar Pokémon. Tente novamente.';
    }
}

function verificarPalpite() {
    const palpite = guessInput.value.trim().toLowerCase();
    if (!palpite) return;

    if (palpite === currentPokemon.name) {
        document.getElementById('feedback').textContent = 'Acertou! É ' + currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1) + '!';
        guessInput.disabled = true;
        submitBtn.disabled = true;
        nextBtn.disabled = false;
        pokemonImg.classList.add('revealed'); // revela a imagem
    } else {
        document.getElementById('feedback').textContent = 'Errou! Tente novamente.';
    }
}

submitBtn.addEventListener('click', verificarPalpite);
guessInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') verificarPalpite();
});
nextBtn.addEventListener('click', carregarPokemon);

carregarPokemon();