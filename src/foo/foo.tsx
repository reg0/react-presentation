import React from 'react';
import PropTypes from 'prop-types';
import './foo.css';

interface Props {
    textToShow?: string;
}

interface State {
    multiplier: number;
}

class Foo extends React.Component<Props, State> {
    constructor(props: Props) {
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

export default Foo;