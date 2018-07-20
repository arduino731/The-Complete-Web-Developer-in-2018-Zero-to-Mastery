import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello1 from './Hello1';
// import CardList2 from './CardList2';
import App3 from './App3';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';

// import Hello1 from './Hello1';
// ReactDOM.render(< Hello1 /> , document.getElementById('root'));
// ReactDOM.render(< Hello1 gretting= {'Hello ninja'}/> , document.getElementById('root'));


ReactDOM.render(
    <div>
        {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} username={robots[0].username} animal={cats[0].animal} /> */}
        {/* < CardList2 robots={ robots }/> */}
        <App3 />
    </div>
    , document.getElementById('root'));

registerServiceWorker();
