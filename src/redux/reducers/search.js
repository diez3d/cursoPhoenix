//import { get } from 'lodash';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR,  SEARCH_MOVIE_COMPLETE} from "../../consts/actionTypes";


const initialState = {};

export default function(state = initialState, action ){
    console.log('DESPUES DE LA FUNCION (REDUCERS/SEARCH)',initialState);
    console.log('ESTAS EN REDUCERS/SEARCH');
    switch (action.type) {
        
        case SEARCH_MOVIE_START:
            console.log('ESTOY ' , SEARCH_MOVIE_START, action, state);
            return { ...state  };
            break;
        case SEARCH_MOVIE_ERROR:
            console.log('ESTOY ' , SEARCH_MOVIE_ERROR, action);
            return { ...state };
            break;
        case SEARCH_MOVIE_COMPLETE:
            console.log('ESTOY ' , SEARCH_MOVIE_COMPLETE, action);
            return { ...state };
            
            break;
        default:
            
            console.log('ESTOY ' , SEARCH_MOVIE_ERROR, action);
            return { ...state };
            break;
            
    }
} 
























