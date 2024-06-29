import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { urlCodigo } from '../../API/Api';

export default function MediaCard(props) {
    const {titulo,url} = props
    const urlVideo = urlCodigo(url)
    console.log(urlVideo)
  return (
    
    <Card sx={{ maxWidth: 345 }} style={{marginTop: 2+'em',marginRight: 5 + 'em'}}>

      <iframe
        // className={styles.video}
        width="100%"
        height="190"
        src={`https://www.youtube.com/embed/${urlVideo}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titulo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Editar</Button>
        <Button size="small">Eliminar</Button>
      </CardActions>
    </Card>
  );
}
