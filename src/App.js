import './App.css';

import { Header } from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/home';

function App() {
  return (
    <div className="App font-Poppins">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
