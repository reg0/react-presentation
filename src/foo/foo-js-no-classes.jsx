import React from 'react';
import PropTypes from 'prop-types';
import './foo.css';
var Foo = React.createClass({
    propTypes: {
        textToShow: PropTypes.string.isRequired
    },
    getInitialState: function() {
      return {multiplier: 1};
    },
    render: function() {
        return (
            <div>
                <input type="number" value={this.state.multiplier} 
                    onChange={e => this.setState({multiplier: e.target.value})} 
                />
                {(this.props.textToShow || '').repeat(this.state.multiplier)}
            </div>
        );
    }
});

export default Foo;