import { put, call, takeLatest } from "redux-saga/effects";
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from "../../consts/actionTypes";

import { apiCall } from '../api'

export function* searchMovie({payload}) {
    console.log('ESTOY POR AQUI');
    try{
        console.log("Accion inicial llamada");
        //const results = yield call(apiCall, `&s=p${payload.movieName}`, null, null, `GET`);
        //yield put({ type: SEARCH_MOVIE_COMPLETE, results});

    }catch(error){
       // yield put({ type: SEARCH_MOVIE_ERROR, error});


    }
}
export default function* search(){
    console.log('ESTOY DENTRO DE SAGAS/SEARCH');
    yield takeLatest(SEARCH_MOVIE_START, searchMovie);
}