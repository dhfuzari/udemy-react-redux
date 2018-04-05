import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search } from './todoActions';
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e) {
        if(e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if(e.key === 'Escape') {
            this.props.handleClear(); /* TODO: Esta linha ainda não funciona */
        }
    }

    componentWillMount() {
        this.props.search();
    }

    render() {
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
                            value={this.props.description}
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                        />
                    </Grid>
                    <Grid cols="12 3 2">
                        <IconButton
                            style="primary"
                            icon="plus"
                            onClick={this.props.handleAdd}
                        />
                        <IconButton
                            style="info"
                            icon="search"
                            onClick={this.props.handleSearch}
                        />
                        <IconButton
                            style="default"
                            icon="close"
                            onClick={this.props.handleClear}
                        />
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({description: state.todo.description});

const mapDispatchToProps = dispatch => bindActionCreators({ 
    changeDescription: changeDescription, search: search 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);