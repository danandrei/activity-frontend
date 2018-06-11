export const apiConstants = {
  HOST: 'http://localhost:9090/v0.1.0/',
  GITLAB_API: 'https://gitlab.com/',
  GITLAB_APP_ID: '2fa4483bf5e5aa439c021058870af6327f1d13d1e357783554a2bf5716d61ae0',
  GITLAB_LOGIN_URL: 'https://gitlab.com/oauth/authorize?client_id=2fa4483bf5e5aa439c021058870af6327f1d13d1e357783554a2bf5716d61ae0&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code',
};

export const userConstants = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  SIGN_OUT: 'SIGN_OUT',
  GET_CURRENT_USER: 'GET_CURRENT_USER',
  GET_CURRENT_USER_SUCCESS: 'GET_CURRENT_USER_SUCCESS',
};
