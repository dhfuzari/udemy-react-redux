import React from 'react';

export default props => (
    <div>
        {props.name} - <strong>{props.lastName}</strong> - {props.language}
    </div>
);