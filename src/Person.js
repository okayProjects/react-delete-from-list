import React from 'react';

const Person = (props) => (
    <li>
        <span>{props.name}</span>
        <button onClick={props.delete}>Usuń</button>
        {/* <button onClick={() => props.delete(props.id)}>Usuń</button> */}
    </li>
)

export default Person