import React, { Component } from 'react';
import M from 'materialize-css';

class AdminSidenav extends Component {
    constructor(props) {
        super(props);

        this.initSidenav = this.initSidenav.bind(this);
    }

    componentDidMount() {
        this.initSidenav();
    }

    componentDidUpdate() {
        this.initSidenav();
    }

    initSidenav() {
        M.Sidenav.init(this.sidenav, { draggable: true });
    }

    render() {
        let style = {
            position: 'fixed',
            zIndex: 1,
            overflowX: 'hidden',
            paddingTop: 'auto',
            marginBottom: 'auto'
        }

      let innerStyle = {
        position: 'fixed',
        zIndex: 1,
        overflowX: 'hidden',
        paddingTop: 'auto',
        marginBottom: 'auto',
        marginLeft: '10%'
      }

        return (
            <div className="container left-align">
                <ul className="no-autoinit sidenav sidenav-fixed grey darken-3" style={style} ref={(sidenav) => { this.sidenav = sidenav }}>
                    <li>
                        <div className="user-view">
                            <br />
                        </div>
                    </li>
                    <li>
                        <a href="#!" className={this.props.currentView === this.props.views.DASHBOARD ? "waves-effect white-text" : "waves-effect grey-text text-darken-1"}
                            onClick={() => { this.props.onClick(this.props.views.DASHBOARD) }}>
                            <i className={this.props.currentView === this.props.views.DASHBOARD ? "material-icons white-text" : "material-icons grey-text text-darken-1"}>dashboard</i>Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#!" className={this.props.currentView === this.props.views.USERS ? "waves-effect white-text" : "waves-effect grey-text text-darken-1"}
                            onClick={() => { this.props.onClick(this.props.views.USERS) }}>
                            <i className={this.props.currentView === this.props.views.USERS ? "material-icons white-text" : "material-icons grey-text text-darken-1"}>person</i>Users
                        </a>
                    </li>
                  <li>
                    <a href="#!" className={this.props.currentView === this.props.views.SCORES ? "waves-effect white-text" : "waves-effect grey-text text-darken-1"}
                       onClick={() => { this.props.onClick(this.props.views.SCORES) }}>
                      <i className={this.props.currentView === this.props.views.SCORES ? "material-icons white-text" : "material-icons grey-text text-darken-1"}>info</i>Scores
                    </a>
                  </li>
                  <li>
                    <a href="#!" className={(this.props.currentView === this.props.views.DIALOG || this.props.currentView === this.props.views.INTENT || this.props.currentView === this.props.views.ENTITY)  ? "waves-effect white-text" : "waves-effect grey-text text-darken-1"}
                       onClick={() => { this.props.onClick(this.props.views.DIALOG) }}>
                      <i className={(this.props.currentView === this.props.views.DIALOG || this.props.currentView === this.props.views.INTENT || this.props.currentView === this.props.views.ENTITY) ? "material-icons white-text" : "material-icons grey-text text-darken-1"}>assessment</i>DialogFlow
                    </a>
                  </li>
                  <ul className="no-autoinit" style={innerStyle} ref={(sidenav) => { this.sidenav = sidenav }}>
                    <li>
                      <a href="#!" className={this.props.currentView === this.props.views.INTENT ? "waves-effect white-text" : "waves-effect grey-text text-darken-1"}
                         onClick={() => { this.props.onClick(this.props.views.INTENT) }}>
                        <i className={this.props.currentView === this.props.views.INTENT ? "material-icons white-text" : "material-icons grey-text text-darken-1"}>chat</i>Intents
                      </a>
                    </li>
                    <li>
                      <a href="#!" className={this.props.currentView === this.props.views.ENTITY ? "waves-effect white-text" : "waves-effect grey-text text-darken-1"}
                         onClick={() => { this.props.onClick(this.props.views.ENTITY) }}>
                        <i className={this.props.currentView === this.props.views.ENTITY ? "material-icons white-text" : "material-icons grey-text text-darken-1"}>blur_on</i>Entities
                      </a>
                    </li>
                  </ul>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default AdminSidenav;
