import React from 'react'
import { connect } from 'react-redux'
import {addRecord} from "../actions/crudTable";

const textInput = (props) => (
    <div>
        <input id="add-input" type="text" defaultValue=""/>
        <button className="btn" onClick={(e) => (
            props.dispatch(addRecord({value: parseInt(document.getElementById('add-input').value) }))
        )
        }>ADD RECORD</button>
    </div>
);

const ConnectedTextInput = connect((state) => {
    return{
        discords: state.records
    }
})(textInput);

export default ConnectedTextInput;