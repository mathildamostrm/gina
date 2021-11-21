import React from 'react'
import GlobalStyle from './global-styles'
import Home from './pages/home/home'
import SouthPole from './pages/south-pole/southpole'
import Adventures from './pages/adventures/adventures'
//import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/scroll-to-top'
import { Navbar, Footer } from './components'
import Sponsors from './pages/sponsors/sponsors'
import Blog from './pages/blog/blog'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import Media from './pages/media/media'
import SponsorKilometer from './pages/sponsor-a-km/sponsor-a-km'
import TermsAndCondition from './pages/sponsor-a-km/terms-conditions'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/southpole' component={SouthPole} />
        <Route path='/sponsors' component={Sponsors} />
        <Route path='/adventures' component={Adventures} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
       {/* <Route path='/sign-up' component={SignUp} /> */}
        <Route path='/contact' component={Contact} />
        <Route path='/media' component={Media} />
        <Route path='/sponsor-a-km' component={SponsorKilometer} />
        <Route path='/terms-and-conditions' component={TermsAndCondition} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
