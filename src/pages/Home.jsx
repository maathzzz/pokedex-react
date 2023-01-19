import React from 'react'
import Cabecalho from '../components/Cabecalho'
import PokemonCard from '../components/PokemonCard'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'

export const Home = () => {
  return (
    <div>
        <Cabecalho/>
         <Container maxWidth="lg">
            <Grid container>
                <Grid item xs={3}>
                <PokemonCard />
                </Grid>
                <Grid item xs={3}>
                <PokemonCard />
                </Grid>
                <Grid item xs={3}>
                <PokemonCard />
                </Grid>
                <Grid item xs={3}>
                <PokemonCard />
                </Grid>
            </Grid>
         </Container>
    </div>
  )
}
