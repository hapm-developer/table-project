import {createStore} from "redux";

const store = createStore((state = {count: 0}, action) =>{
   switch (action.type) {
       case 'INCREMENT':
           return{
               count: state.count + 1
           };
       case 'DECREMENT':
           return{
               count: state.count - 1
           };
       case 'RESET':
           return{
               count: 0
           };
       case 'SET':
           return{
               count: state.count
           };
       default:
           return state
   }
    
    return state
});

console.log(store.getState());

