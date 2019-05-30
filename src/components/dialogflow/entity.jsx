import React, {Component} from 'react';
import Axios from 'axios/index';
import M from 'materialize-css';
import LoadingComponent from '../loading/loading';
import Register from '../register/register';
import {Link} from 'react-router-dom';

class Entity extends Component {
  constructor(props) {
    super(props)
  }

  getEntity() {
    Axios.defaults.headers.common['Authorization'] = "Bearer ya29.c.EloSBze9DSxVnvZjAl9PwZRTmPitG87tDXSRnkR6NU7cyALnv5-KNMUATLUPpjwRWdiSWXXQAeDnEZb9dHsLQ2fYGmzIzvIMofbIQBh7tRnatQAtaWGxubAbslo";
    Axios.get("https://dialogflow.googleapis.com/v2/projects/greetings-e8c46/agent/entityTypes")
      .then((result) => {
        console.log("--------------->", result);
        const entityResults = result.data.entityTypes .map((res) =>
          <tr>
            <td>{res.displayName}</td>
          </tr>
        );
        this.setState({
          entityResult: entityResults
        })
      })
  }

  componentDidMount() {
    this.getEntity();
  }

  render() {
    var padding = {
      marginLeft: '5%',
      marginRight: '5%'
    }
    return (
      <div className="" style={padding}>
        <span className="col s12 m12 l12">
          <h4 className="grey-text text-darken-3 lighten-3 left-align">Entity</h4>
          <div className="collapsible-header grey-text text-darken-3 valign-wrapper">
            <table>{(() => {
              if (this.state) {
                return this.state.entityResult
              }
            })()}</table>
          </div>
        </span>
      </div>
    )
  }
}

export default Entity;

