import { all } from 'redux-saga/effects';

import search from './search';

export default function* rootSaga() {
    console.log('ESTOY DENTRO DE SAGAS/INDEX');
	yield all([
        search() 
    ]);
}