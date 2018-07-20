import React, { Component } from 'react';
import './Hello1.css';


// class Hello extends Component {
//     render() {
//         return (
//             <div className='tc f1'>
//                 <h1>Hello world</h1>
//                 <p>Welcome to React</p>
//                 <p>created by Brian van vlymen</p>
//             </div>
//         )
//     }
// }

//it is really really powerful and once you get used to it you can build any components you want
// class Hello extends Component {
//     render() {
//         return (
//             <div className='tc f1'>
//                 <h1>Hello world</h1>
//                 <p>Welcome {this.props.greeting}</p>
//                 <p>created by Brian van vlymen</p>
//             </div>
//         )
//     }
// }


//
const Hello = (props) => {
    return (
        <div className='tc f1'>
            <h1>Hello world</h1>
            <p>Welcome {props.greeting}</p>
            <p>created by Brian van vlymen</p>
        </div>
    )
}

export default Hello;