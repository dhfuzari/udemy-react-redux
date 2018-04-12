import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clear } from './todoActions';
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props;
        if(e.key === 'Enter')  {
            e.shiftKey ? search() : add(description)
        } else if(e.key === 'Escape') {
            clear();
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
        const { add, search, description, changeDescription, clear } = this.props;
        return (
            <div className="todoForm" role="form">
                <div className="row">
                    <Grid cols="12 9 10">
                        <input
                            type="text"
                            name="description"
                            id="description"
                            className="form-control"
                            placeholder="Adicione uma tarefa"
                            value={description}
                            onChange={changeDescription}
                            onKeyUp={this.keyHandler}
                        />
                    </Grid>
                    <Grid cols="12 3 2">
                        <IconButton
                            style="primary"
                            icon="plus"
                            onClick={() => add(description)}
                        />
                        <IconButton
                            style="info"
                            icon="search"
                            onClick={search}
                        />
                        <IconButton
                            style="default"
                            icon="close"
                            onClick={clear}
                        />
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ 
    changeDescription, search, add, clear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);