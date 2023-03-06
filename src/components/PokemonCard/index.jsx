import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Icon, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';

export default function PokemonCard({ id, name , image, types }) {
  const tiposPokemon = () => {
    if (types[1]) {
      return types[0].type.name + " | " + types[1].type.name;
    }
    return types[0].type.name;
  };
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {id} | {name} 
          </Typography>          
          <Typography variant="caption" color="text.secondary">
            {tiposPokemon()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Box display="flex" justifyContent="space-between" alignItems="center">

          <IconButton size="medium" color="inherit">
            <EditIcon/>
          </IconButton>
          <IconButton size="medium" color="inherit">
            <DeleteIcon/>
          </IconButton>
          <Typography gutterBottom variant="caption" component="div" color="text.secondary">
          </Typography>
      </Box>

      </CardActions>
    </Card>
  );
}
