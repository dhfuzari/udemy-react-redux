import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member'

ReactDOM.render(
    <Family>
        <h1>Frameworks</h1>
        <Member name="ReactJS" lastName="Facebook" />
        <Member name="AngularJS" lastName="Google" />
        <Member name="MarkoJS" lastName="eBay" />
        <Member name="ReactJS" lastName="Facebook" />
        <Member name="AngularJS" lastName="Google" />
        <Member name="MarkoJS" lastName="eBay" />
    </Family>,            
    document.getElementById('app')
);