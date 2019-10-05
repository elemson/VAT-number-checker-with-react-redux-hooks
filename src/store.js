import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers, { } from './reducers/root.Reducer'

//reducers 

//---middleware
const middleware = applyMiddleware(thunk);

// ----store
const Store = createStore(reducers, middleware)

export default Store;