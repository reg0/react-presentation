import React from 'react';
import './foo.css';
import FooDisplay from './foo-display';
import {FooTextInput as FooInput} from './foo-input';

interface Props {
    textToShow?: string;
}

interface State {
    multiplier: number;
}

class Foo extends React.Component<Props, State> {
    private changeHandler: (newMultiplier: number) => void;

    constructor(props: Props) {
        super(props);
        this.state = {
            multiplier: 1
        }
        this.changeHandler = this.onChange.bind(this);
    }
    
    onChange(newMultiplier: number) {
        this.setState({multiplier: newMultiplier});
    }

    render() {
        return (
            <div>
                <FooInput changeHandler={this.changeHandler} multiplier={this.state.multiplier} />
                <FooDisplay multiplier={this.state.multiplier} textToShow={this.props.textToShow || ''} />
            </div>
        );
    }
}

export default Foo;