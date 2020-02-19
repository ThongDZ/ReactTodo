import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

const Trash = <FontAwesomeIcon icon={faTrash}/>;
class Delete extends React.Component {
    handleChange = (id) => {
        axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };
    render() {
        return (
            <button onClick={this.handleChange}>{Trash}</button>
        )
    }
}

export default Delete;