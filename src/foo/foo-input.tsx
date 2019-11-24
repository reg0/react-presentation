import React from 'react';
import './foo.css';

interface Props {
    changeHandler: (e: number) => void;
    multiplier: number;
    inputType: string;
}

class FooInput extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <input 
                    type={this.props.inputType}
                    value={this.props.multiplier} 
                    onChange={e => this.props.changeHandler(+e.target.value)} 
                />
            </React.Fragment>
        );
    }
}

const withInputType = (inputType: 'text' | 'number') => (WrappedComponent: any) => (props: any) => {
    return <WrappedComponent {...props} inputType={inputType} />
}

export const FooTextInput = withInputType('text')(FooInput);
export const FooNumberInput = withInputType('number')(FooInput);
