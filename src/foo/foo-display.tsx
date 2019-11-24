import React from 'react';

interface Props {
    textToShow: string;
    multiplier: number;
}

class FooDisplay extends React.Component<Props> {
    render() {
        return (
            <React.Fragment>
                {(this.props.textToShow || '').repeat(this.props.multiplier)}
            </React.Fragment>
        );
    }
}

export default FooDisplay;