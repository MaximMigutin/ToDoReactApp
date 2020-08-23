import React, {Component} from 'react';

// export default function Demo1() {
//     return (
//         <div>
//             <h1>Hello from Functional Component!</h1>
//     </div>
//     );
// }

const Demo1 = (props) => {
    return (
        <div>
            <h1> Hello from Functional component the 2nd way!</h1>
            <h2>{props.Title}</h2>
        </div>    
    )
}


export default Demo1;