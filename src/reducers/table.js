import uuid from 'uuid';
// Table reducers

const tableReducerDefaultState = [
    {
        "id": uuid(),
        "value": 100,
    },
    {
        "id": uuid(),
        "value": 200
    },
    {
        "id": uuid(),
        "value": 300
    }
];

export default (state = tableReducerDefaultState, action) =>{
    switch (action.type) {
        case 'ADD_RECORD':
            return [
                ...state,
                action.record
            ];
        case 'REMOVE_RECORD':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_RECORD':
            console.log(action, '<======');
            return state.map((record) => {
                if (record.id === action.id){
                    return{
                        ...record,
                        ...action
                    };
                }else {
                    return record;
                }
            });
        default:
            return state
    }
};
