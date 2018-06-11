import React, { Component } from 'react';
import { userActions } from '../../actions';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={()=>{this.props.signOut()}}>Sign Out</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {
  signOut: userActions.signOut,
})(HomePage);
