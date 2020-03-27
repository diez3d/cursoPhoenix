import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {

	console.log('PASO POR REDUX/STORE/INDEX');
	const sagaMiddleware = createSagaMiddleware();
	return {
		...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};

export default configureStore;