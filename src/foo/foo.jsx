import React from 'react';
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
                {this.props.textToShow.repeat(this.state.multiplier)}
            </div>
        );
    }
}

export default Foo;