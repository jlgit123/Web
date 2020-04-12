import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //可注释
import App from './App';
import registerServiceWorker from './registerServiceWorker';//可注释

// patch(container, vnode)
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

/*
    React.createElement(App, null);
    var app = new App()
    return app.render()
*/
