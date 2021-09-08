import './App.css';

import { Header } from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/home';
import { FeaturesPage } from './pages/features-page/features-page';
import { PricingPage } from './pages/pricing-page/pricing-page';
import { AboutPage } from './pages/about/about-page';

function App() {
  return (
    <div className="App font-Poppins">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturesPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
