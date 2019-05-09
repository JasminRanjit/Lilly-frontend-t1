import React, {Component} from 'react';
import Axios from 'axios';
import M from 'materialize-css';
import LoadingComponent from '../loading/loading';
import Register from '../register/register';
import {Link} from 'react-router-dom';

class DialogFlow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var padding = {
      marginLeft: '5%',
      marginRight: '5%'
    }
    return (
      <div className="" style={padding}>
        <span className="col s12 m12 l12">
          <h4 className="grey-text text-darken-3 lighten-3 left-align">DialogFlow</h4>
        </span>
      </div>
    )
  }
}

export default DialogFlow;

