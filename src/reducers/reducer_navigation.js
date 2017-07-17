import { SET_NAVIGATION } from '../actions';

const defaultValue = {
  activePage: 'dashboard',
  breadcrumb: {
    title: 'home',
    icon: 'home'
  }
}

export default function(state = defaultValue, action) {
  switch (action.type) {
    case SET_NAVIGATION:
      return {
        activePage: action.activePage,
        breadcrumb: {
          title: action.breadcrumb,
          icon: action.icon
        },
      };
    default:
      return state;

  }
}
