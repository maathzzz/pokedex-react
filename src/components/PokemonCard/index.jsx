import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard() {
  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="#"
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pokemon
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Editar
        </Button>
      </CardActions>
    </Card>
  );
}
