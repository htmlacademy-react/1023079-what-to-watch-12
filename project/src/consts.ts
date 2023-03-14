export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  Film: '/films/:id',
  AddReview: '/films/:id/review',
  Player: '/player/:id'
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NOAUTH',
  Unknown: 'UNKNOWN'
} as const;
