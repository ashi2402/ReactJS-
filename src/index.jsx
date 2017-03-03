import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
            <h1>Hello World</h1>
            <p>My first project in ReactJS</p>
                <h2>Nothing is difficult</h2>
                <h4>fghhhdhhgj</h4>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('container'));