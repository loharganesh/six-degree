import './App.css';

// Context
import { DataContextProvider } from './context/data.context';

import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from './pages/home/home.page';

export const App = () => (
  <DataContextProvider>
    <Router>
      <Home />
    </Router>
  </DataContextProvider>
);
