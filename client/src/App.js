import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastProvider } from 'react-toast-notifications';

import Home from './components/Home'
import AboutUs from './components/AboutUs.js'
import ContactUs from './components/ContactUs.js';
import HelpSupport from './components/HelpSupport.js'

function App() {
  return (
    <ToastProvider>
      <Router>
      
        {/* Website Routes */}
        <Route path="/" exact component={Home} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/helpandsupport" exact component={HelpSupport} />

      </Router>
    </ToastProvider>
  );
}

export default App;
