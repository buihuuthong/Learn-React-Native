import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import AppNavigation from './src/navigations/AppNavigation';
import store from './src/redux/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <AppNavigation />
    </ReduxProvider>
  );
};

export default App;
