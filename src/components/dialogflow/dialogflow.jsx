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
    var image = {
      width: '80%',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
    var bullets = {
      marginLeft: '5%',
      listStyleType: 'circle'
    }
    return (
      <div className="" style={padding}>
        <span className="col s12 m12 l12">
          <h4 className="grey-text text-darken-3 lighten-3 left-align">DialogFlow</h4>
           <div className="collapsible-header grey-text text-darken-3 valign-wrapper">
             <span className="col s12 m12 l12 left-align">
               <h5>Overview</h5>
               <p>Dialogflow lets you build conversational interfaces on top of your products and services by providing a powerful natural language understanding (NLU) engine to process and understand natural language input. This document goes over how Dialogflow works and how it can help you create conversational user interfaces that delight users.</p>
               <p>Traditional computer interfaces require structured and predictable input to function properly, which makes the use of these interfaces unnatural and sometimes difficult. If users can't easily figure out this structured input, they'll have a hard time figuring out what to do.</p>
               <p>For example, consider an easy user request like "What's the forecast like today?". Other users might also ask:</p>
               <ul><li style={bullets}>"What's the weather like right now?"</li>
                 <li style={bullets}>"What's the temperature like in San Francisco tomorrow?"</li>
                 <li style={bullets}>"What will the weather be like on the 21st?"</li></ul>
               <p>Even with this simple question, you can see that conversational experiences are hard to implement. Interpreting and processing natural language requires a very robust language parser that's capable of understanding the nuances of language.</p>
               <p>Your code would have to handle all these different types of requests (and potentially many more) to carry out the same logic: looking up some forecast information for a time and location. For this reason, a traditional computer interface would tend to force users to input a well-known, standard request at the detriment of the user experience, because it's just easier.</p>
                <p>However, Dialogflow lets you easily achieve a conversational user experience by handling the natural language understanding (NLU) for you. When you use Dialogflow, you create agents that can understand the vast and varied nuances of human language and translate that to standard and structured meaning that your apps and services can understand. Let's take a look at how Dialogflow might handle the previous examples for weather forecast requests.</p>
               <img style={image} src="https://dialogflow.com/docs/images/intro/overview-diagram.png"/>
               <b>Figure 1.</b> Example of how Dialogflow handles a user utterance.
               <p>To look up a weather forecast, you might need a few pieces of information, like the time users want the forecast for and their location. However, as we previously mentioned, different users might request a forecast in different ways. Dialogflow can understand these differences and translate them to a standard user intent to get the forecast. It can then parse the user's request for the pertinent data you need to fulfill the request. In this case, that's the user's desired time and location for the weather forecast. Finally, you can use this data to look up the weather with a public REST API and return the weather to the user in the form of a response.</p>
               <p>You can find the documentation for DialogFlow <a href="https://dialogflow.com/docs">here</a>.</p></span>
           </div>
        </span>
      </div>
    )
  }
}

export default DialogFlow;

