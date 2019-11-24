import React from 'react';
import './foo.css';

interface Props {
    changeHandler: (e: number) => void;
    multiplier: number;
}

class FooInput extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <input 
                    type="number" 
                    value={this.props.multiplier} 
                    onChange={e => this.props.changeHandler(+e.target.value)} 
                />
            </React.Fragment>
        );
    }
}

export default FooInput;