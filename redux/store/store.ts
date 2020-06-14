import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { rootReducer } from "../root/rootReducer";
// import { rootSaga } from '../root/rootSaga';

//const sagaMiddleware = createSagaMiddleware();
//sagaMiddleware.run(rootSaga);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;