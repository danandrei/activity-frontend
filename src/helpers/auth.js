import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken === null,
  wrapperDisplayName: 'userIsNotAuthenticated',
  redirectPath: '/',
  allowRedirectBack: false,
});

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.user.accessToken !== null,
  wrapperDisplayName: 'userIsAuthenticated',
  redirectPath: '/login',
  allowRedirectBack: false,
});
