import { compose } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';

export const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: (action) => (action.error ? 'firebrick' : 'deepskyblue'),
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const developmentEnvironment = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = developmentEnvironment && devtools ? devtools : compose;

const middleware = [thunk];

if (developmentEnvironment) {
  middleware.push(logger);
}

export { composeEnhancers, middleware };
