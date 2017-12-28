import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member'

ReactDOM.render(
    <Family language="javascript">        
        <Member name="ReactJS" lastName="Facebook" />
    </Family>,            
    document.getElementById('app')
);