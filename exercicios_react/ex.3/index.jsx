    import React from 'react';
    import ReactDOM from 'react-dom';
    import FirstC, { SecondC } from './component'

    ReactDOM.render(
        <div>
            <FirstC />
            <SecondC />
        </div>,
        document.getElementById('app')
    );