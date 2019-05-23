import React, {Component} from 'react';
import Axios from 'axios/index';


class Intent extends Component {
  constructor(props) {
    super(props)
  }

  getIntents(){
    Axios.defaults.headers.common['Authorization'] = "Bearer ya29.c.EloSBze9DSxVnvZjAl9PwZRTmPitG87tDXSRnkR6NU7cyALnv5-KNMUATLUPpjwRWdiSWXXQAeDnEZb9dHsLQ2fYGmzIzvIMofbIQBh7tRnatQAtaWGxubAbslo";
    Axios.get("https://dialogflow.googleapis.com/v2/projects/greetings-e8c46/agent/intents")
      .then((result) => {
        console.log("--------------->", result);
        const intentResults = result.data.intents.map((res) =>
          <tr><td>{res.displayName}</td></tr>
        );
        this.setState({
          intentResult: intentResults
        })
      })
    }

componentDidMount() {
  this.getIntents();
  }

  render() {
    var padding = {
      marginLeft: '5%',
      marginRight: '5%'
    }
    return (
      <div className="" style={padding}>
        <span className="col s12 m12 l12">
          <h4 className="grey-text text-darken-3 lighten-3 left-align">Intent</h4>
          <div className="collapsible-header grey-text text-darken-3 valign-wrapper">
            <table>{(() => {if(this.state) {return this.state.intentResult}})()}</table>
          </div>
        </span>
      </div>
    )
  }
}

export default Intent;
