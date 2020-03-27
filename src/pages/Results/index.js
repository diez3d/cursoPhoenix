import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Container} from '@material-ui/core';
import queryString from 'query-string';


import {searchMovie} from '../../redux/actions/search';

export default ({location}) =>{
    //console.log(queryString.parse(location.search));

    const dispatch = useDispatch();
    console.log('VALOR DE DISPATCH results/index',dispatch);
    useEffect (() => {
        const  { movieName }  = queryString.parse(location.search);
        console.log('dentro de useEffect vale movieNAme ' ,movieName);
        
        console.log('ESTOY ANTES DISPATCH ');
        dispatch(searchMovie({movieName}));
        
        console.log('Estoy despues de dispatch de results/index');
    });




    return(
        <Container>
            Results
        </Container>
    )

}