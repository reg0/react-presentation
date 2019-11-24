import React from 'react';
import './foo.css';

interface Props {
    textToShow?: string;
}

function Foo(props: Props) {

    const [multiplier, setMultiplier] = React.useState(1);

    return (
        <div>
            <input type="number" value={multiplier} onChange={e => setMultiplier(+e.target.value)}></input>
            {(props.textToShow || '').repeat(multiplier)}
        </div>
    );
}

export default Foo;