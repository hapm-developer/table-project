import uuid from 'uuid';
import './styles/app.css'
import React, {Component} from 'react';
import { connect } from 'react-redux';
import ConnectedTextInput from './components/input-text';
import ConnectedDeleteRecord from './components/delete-record'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerText: "Welcome to React",
            ContentText: "In this area, we will go over the Component"
        };
    }

    render() {
        return (
            <Content />
        );
    };
}

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
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
            ]
        }

    }

    render() {
        const {data} = this.state;
        return (
            <div className="App-intro">
                <h1> Record Table</h1>
                <p>This table has just a id to value</p>
                <table id="records">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Value</th>
                        <th>Option</th>
                    </tr>
                    </thead>
                <tbody>
                    {/*{data.map((record, i) => <TableRow key={i} data={record}/>)}*/}
                    <ConnectedList />
                </tbody>
                </table>
                <ConnectedTextInput />
            </div>
        );
    };
};

const  TableRow = (props) => (props.records.map((record, i) =>
        <tr key={i}>
            <td>{record.id}</td>
            <td>{record.value}</td>
            <td><ConnectedDeleteRecord idRecord={record.id}/></td>
        </tr>
    )
);

const ConnectedList = connect((state) => {
    return {
        records: state.records
    };
})(TableRow);

/*class AddButton extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
        <a onClick={} id="add-button" className="btn-style">Add Record</a>
        );
    };
}*/


// class TableRow extends Component {
//     constructor () {
//         super();
//     }
//         render() {
//             return (
//                 <tr>
//                     <td>{props.records.id}</td>
//                     <td>{props.records.value}</td>
//                 </tr>
//             );
//         }
// }


export default App;