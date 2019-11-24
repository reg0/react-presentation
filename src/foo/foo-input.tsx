import React from 'react';
import './foo.css';
import AuthCtx from '../auth-context';

interface Props {
    changeHandler: (e: number) => void;
    multiplier: number;
    inputType: string;
}

class FooInput extends React.Component<Props> {
    // render() {
    //     const authContext = React.useContext(AuthCtx);
    //     return (
    //         <React.Fragment>
    //             <input 
    //                 type={this.props.inputType}
    //                 value={this.props.multiplier} 
    //                 onChange={e => this.props.changeHandler(+e.target.value)}
    //                 disabled={!authContext.canEdit}
    //             />
    //             { authContext.username } can{ authContext.canEdit ? '' : '\'t' } edit this value
    //             <br />
    //         </React.Fragment>
    //     );
    // }
    render() {
        return (
            <AuthCtx.Consumer>
                { authContext => (
                    <React.Fragment>
                        <input 
                            type={this.props.inputType}
                            value={this.props.multiplier} 
                            onChange={e => this.props.changeHandler(+e.target.value)}
                            disabled={!authContext.canEdit}
                        />
                        { authContext.username } can{ authContext.canEdit ? '' : '\'t' } edit this value
                        <br />
                    </React.Fragment>
                )}
            </AuthCtx.Consumer>
        );
    }
}

const withInputType = (inputType: 'text' | 'number') => (WrappedComponent: any) => (props: any) => {
    return <WrappedComponent {...props} inputType={inputType} />
}

export const FooTextInput = withInputType('text')(FooInput);
export const FooNumberInput = withInputType('number')(FooInput);
