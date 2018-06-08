import { createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const initialState = {};
// const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store