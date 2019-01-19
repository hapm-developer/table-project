import React from 'react'
import { connect } from 'react-redux'
import {removeRecord} from "../actions/crudTable";

const deleteRecord = (props) => (
    <div>
        <button className="btn" onClick={(e) => (
            props.dispatch(removeRecord({id:props.id}))
        )
        }>DELETE</button>
    </div>
);

const ConnectedDeleteRecord = connect((state, props) => {
    return{
        discords: state.records,
        id: props.idRecord
    }
})(deleteRecord);

export default ConnectedDeleteRecord;