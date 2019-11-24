import React from 'react';
import PropTypes from 'prop-types';
import './foo.css';

class Foo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multiplier: 1
        }
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.multiplier}></input>
                {(this.props.textToShow || '').repeat(this.state.multiplier)}
            </div>
        );
    }
}

Foo.propTypes = {
    textToShow: PropTypes.string.isRequired
};

export default Foo;