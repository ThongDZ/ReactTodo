import React from 'react'
import PropTypes from 'prop-types';

function TodoList(props) {
    const list = props.list;
    const listItems = list.map((item, index) =>
    <li key={index}>
        {item.name}
    </li>
    );
	return (
    <ul>{listItems}</ul>
	);
}
TodoList.propTypes = {
    list: PropTypes.array.isRequired,
}

export default TodoList;
