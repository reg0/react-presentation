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
    private changeHandler: (e: any) => void;

    constructor(props: Props) {
        super(props);
        this.state = {
            multiplier: 1
        }
        this.changeHandler = this.onChange.bind(this);
    }
    
    onChange(event: any) {
        this.setState({multiplier: event.target.value});
    }

    render() {
        return (
            <div>
                <input type="number" value={this.state.multiplier} onChange={this.changeHandler}></input>
                {(this.props.textToShow || '').repeat(this.state.multiplier)}
            </div>
        );
    }
}

export default Foo;