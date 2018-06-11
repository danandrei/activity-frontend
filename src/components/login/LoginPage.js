import React, { Component } from 'react';
import { apiConstants } from '../../helpers';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import qs from 'query-string';

class LoginPage extends Component {

  componentDidMount() {
    const qsParams = qs.parse(window.location.search);
    if (qsParams.code) {
      this.props.gitlabSignIn(qsParams.code);
    }
  }

  render() {
    return (
      <div>
        <h1>login</h1>
        <a href={apiConstants.GITLAB_LOGIN_URL}>Login with gitlab</a>
      </div>
    )
  }
}

export default connect(null, {
  gitlabSignIn: userActions.gitlabSignIn,
})(LoginPage);
