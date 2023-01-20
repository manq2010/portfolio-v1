import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyles';

const App = () => (
  <div className="app">

    <GlobalStyle />
    <Router>
      <AppRoutes />
    </Router>
  </div>
);

export default App;
