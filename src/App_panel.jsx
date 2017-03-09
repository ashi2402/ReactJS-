import React from 'react';
import Panel from './Panel.jsx';


export default class App_panel extends React.Component{
    constructor(props){
        super(props);
    //     static defaultProps =
       App_panel.propTypes = { whatIsUniqueAboutThisPanel: React.PropTypes.string };
       App_panel.propTypes = { didYouKnowThat: React.PropTypes.string };
    }


    render() {
        let style = {
            marginTop: "20px"
        };
        return(
          <div className="panel" style={style}>
            <div className="panel-header">
                This is a Panel component instance.
            </div>
              <div className="panel-body">
                  <p>Did you know that...</p>
                  <p><strong>{this.props.didYouKnowThat}</strong>.</p>
                  <p>There is something unique about this component instance too...</p>
                  <p><strong>{this.props.whatIsUniqueAboutThisPanel}</strong>.</p>
              </div>
          </div>
        );
    }
}
App_panel.defaultProps = {
    didYouKnowThat: "This default property will be shared across all Panel component instances",
};