import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters} from '../actions'
import{ deleteTodo} from '../actions';

class ShowButtons extends Component {
    onChange = (filter) => {
        this.props.dispatch(setVisibilityFilter(filter))
    }

    onDelete = () => {
        this.props.dispatch(deleteTodo())
    }
    render() { 
        return ( 
            <div>
                <button filter={VisibilityFilters.SHOW_ALL} 
                onClick={() => this.onChange('SHOW_ALL')}
                 disabled={this.props.active === 'SHOW_ALL'}>ALL</button>
                <button filter={VisibilityFilters.SHOW_ACTIVE} 
                onClick={() => this.onChange('SHOW_ACTIVE')} 
                disabled={this.props.active === 'SHOW_ACTIVE'}>Active</button>
                <button 
                filter={VisibilityFilters.SHOW_COMPLETED} 
                onClick={() => this.onChange('SHOW_COMPLETED')} 
                disabled={this.props.active === 'SHOW_COMPLETED'}>Completed</button>
                <button onClick={()=>this.onDelete('DELETE_TODO')}>Delete Selected</button>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    active: state.visibilityFilter 
})
 
export default connect(mapStateToProps)(ShowButtons)