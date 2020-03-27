import React, { useEffect } from 'react';
import {Container} from '@material-ui/core';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

import {searchMovie} from '../../redux/actions/search';

export default ({location}) =>{
    //console.log(queryString.parse(location.search));

    const dispatch = useDispatch();
    console.log(dispatch);
    useEffect (() => {
        const  { movieName }  = queryString.parse(location.search);
        console.log('dentro de useEffect vale movieNAme ' ,movieName);
        
        dispatch(searchMovie({movieName}));
    
    });




    return(
        <Container>
            Results
        </Container>
    )

}