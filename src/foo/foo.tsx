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
        const onChange = (event: any) => {
            this.setState({multiplier: event.target.value});
        }
        return (
            <div>
                <input type="number" value={this.state.multiplier} onChange={onChange}></input>
                {(this.props.textToShow || '').repeat(this.state.multiplier)}
            </div>
        );
    }
}

export default Foo;