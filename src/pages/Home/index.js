import React, {useState} from 'react';
import { Container, Typography, Card, Grid,TextField,Button} from '@material-ui/core'

import {MovieIcon} from '../../icons';
import styles from './style';



export default ({ history }) =>{
    //console.log('history vale ---> ' , history);
    const [searchText, setSearchText] = useState('');
    const classes = styles();

    const  handleSearchTextChange = event => {  // sacar el titulo de la pelicula  
        setSearchText(event.target.value)// Buscar el la pelicula
    };
    const handleSearchTextClick = event=>{ // Pasar el titulo de la pelicula 
        history.push(`/results?movieName=${searchText}`)
    }
    const handleCleanTextClick = event=>{ // Borrar caja 
        setSearchText('');
    }
    //console.log(searchText);
    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer} >
                    <Grid>
                        <Typography className={classes.title}>Bienvenido</Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}></MovieIcon>
                    </Grid>
                </Grid>
                <TextField value={searchText}
                            placeholder="Buscar...." 
                            onChange={handleSearchTextChange}>
                            
                </TextField>
                <Grid className={classes.buttonsContainer}>
                   <Button variant="contained" 
                    onClick={handleCleanTextClick}>Limpiar</Button>
                   <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    )
}