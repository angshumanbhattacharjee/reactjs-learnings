import React from 'react';
import { hexToRgb, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 6,
    borderRadius: 20,
    margin: 10,
    backgroundColor: "lightgrey",

  },
  media: {
    height: 400,
    borderRadius: 15,
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
});

export const MovieItemCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.moviePosterLink}
          title={props.movieTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movieTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    );
}