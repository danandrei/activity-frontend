import { userConstants } from '../helpers';

const gitlabSignIn = (code) => {
  return {
    type: userConstants.SIGN_IN,
    payload: {
      request: {
        method: 'GET',
        url: '/auth/gitlab',
        params: {
          code,
        }
      }
    }
  }
};

const signOut = () => {
  localStorage.removeItem('accessToken');

  return {
    type: userConstants.SIGN_OUT,
  }
};

const getCurrentUser = () => {
  return {
    type: userConstants.GET_CURRENT_USER,
    payload: {
      request: {
        method: 'GET',
        url: '/users/me',
      }
    }
  }
};


export const userActions = {
  gitlabSignIn,
  signOut,
  getCurrentUser,
}
