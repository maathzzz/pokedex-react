import React, { useEffect } from 'react'
import Cabecalho from '../components/Cabecalho'
import PokemonCard from '../components/PokemonCard'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

export const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    mostraPokemons();
  }, []);

  const mostraPokemons = () => {

    var endpoints = [];
    // valor inicial; condicao para acabar; interacao
    for (var i = 1; i < 100; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }

    console.log(endpoints);
    var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res))
    .catch((err) => console.log(err));;

  // axios
  // .get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
  // .then((res) => setPokemons(res.data.results))
  // .catch((err) => console.log(err));
  };
  
  const buscaPokemon = (name) => {
    var pokemonBuscado = [];
    if(name===""){
      mostraPokemons();
    }

    for (var i in pokemons){
      if(pokemons[i].data.name.includes(name)) {
        pokemonBuscado.push(pokemons[i]);
      }
    }
    console.log(buscaPokemon);
    setPokemons(pokemonBuscado);
  };

  // tentando colocar tipos type={pokemon.data.types.type.name} 

  return (
    <div>
        <Cabecalho buscaPokemon={buscaPokemon}/>
         <Container maxWidth="lg">
            <Grid container spacing={2}>
              {pokemons.map((pokemon, key) => (
                <Grid item xs={3} key={key}>
                  
                  <PokemonCard 
                  id={pokemon.data.id} 
                  name={pokemon.data.name} 
                  image={pokemon.data.sprites.front_default} 
                  types={pokemon.data.types} 
                  />
                  
                </Grid>
                ))}

            </Grid>
         </Container>
    </div>
  )
}
