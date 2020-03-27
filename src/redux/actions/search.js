import {SEARCH_MOVIE_START}  from '../../consts/actionTypes';
import {SEARCH_MOVIE_ERROR} from '../../consts/actionTypes';
import {SEARCH_MOVIE_COMPLETE}from '../../consts/actionTypes';

export const searchMovie = payload => ({
    type : SEARCH_MOVIE_START,  
    payload
});