import { createPokemon } from "./pokemon-cards.js";
import { spinner } from "./spinner.js";
import { pokemonContainer } from "./pokemon-cards.js";


const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let offset = 1;
let limit = 8;


        previous.addEventListener('click', () => {
            if (offset != 1){
             offset -= 9;
             removeChildNodes(pokemonContainer);
            fetchPokemons(offset, limit);
            }
          
        })
        
        next.addEventListener('click', () => {
            offset += 9;
            removeChildNodes(pokemonContainer);
            fetchPokemons(offset, limit);
        })
    
    

 function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
        spinner.style.display = "none";
    });
}

function fetchPokemons (offset, limit) {
    spinner.style.display = "block";
    for ( let i = offset; i <= offset + limit; i++) {
        fetchPokemon(i);
    }
};

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

fetchPokemons(offset, limit);