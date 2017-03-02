import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
            <h1>Hello World</h1>
            <p>My first project in ReactJS</p>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('container'));