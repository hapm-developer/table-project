import uuid from 'uuid';
// ADD_RECORD

export const addRecord = (
    {
        value =  0
    } = {}
) => ({
    type: 'ADD_RECORD',
    record: {
        id: uuid(),
        value
    }
});
// REMOVE_RECORD

export const removeRecord = ({id} = {}) => ({
    type: 'REMOVE_RECORD',
    id
});
// EDIT_RECORD

export const editRecord = ({id, value}) => ({
    type: 'EDIT_RECORD',
    id,
    value
});