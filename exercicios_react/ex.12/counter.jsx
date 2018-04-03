import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { inc, dec, changeStep } from './counterActions';

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input
            type="number"
            value={props.counter.step}
            onChange={props.changeStep}
        />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Incd</button>
    </div>
);

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
    inc, dec, changeStep 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);