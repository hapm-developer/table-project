import  { createStore, combineReducers} from "redux";
import recordReducer from '../reducers/table'
// import filterReducer from '../reducers/filters'
// Store creation

export default () => {
    const store = createStore(
        combineReducers({
            records: recordReducer,
            // filters: filterReducer
        })
    );
    return store;
};