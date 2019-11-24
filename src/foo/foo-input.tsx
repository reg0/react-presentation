import React from 'react';
import './foo.css';
import { AuthContext } from '../auth-context';

interface Props {
    changeHandler: (e: number) => void;
    multiplier: number;
    inputType: string;
    auth: AuthContext;
}

class FooInput extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                <input 
                    type={this.props.inputType}
                    value={this.props.multiplier} 
                    onChange={e => this.props.changeHandler(+e.target.value)}
                    disabled={!this.props.auth.canEdit}
                />
                { this.props.auth.username } can{ this.props.auth.canEdit ? '' : '\'t' } edit this value
                <br />
            </React.Fragment>
        );
    }
}

const withInputType = (inputType: 'text' | 'number') => (WrappedComponent: any) => (props: any) => {
    return <WrappedComponent {...props} inputType={inputType} />
}

export const FooTextInput = withInputType('text')(FooInput);
export const FooNumberInput = withInputType('number')(FooInput);
