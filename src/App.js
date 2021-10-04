import React from 'react'
import GlobalStyle from './globalStyles'
import Home from './pages/Home/Home'
import SouthPole from './pages/SouthPole/SouthPole'
import Adventures from './pages/Adventures/Adventures'
//import SignUp from './pages/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { Navbar, Footer } from './components'
import Sponsors from './pages/Sponsors/Sponsors'
import Blog from './pages/Blog/Blog'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Media from './pages/Media/Media'

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
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
