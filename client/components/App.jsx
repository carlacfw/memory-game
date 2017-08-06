import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Rules from './Rules'
import Board from './Board'
import Clock from './Clock'
import Win from './Win'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      winStats: null

    }
  }
  gameEnd(misses, matches, elapsedTime, isWin) {
    let winStats = {misses, matches, elapsedTime, isWin}
    this.setState(winStats)
    console.log({winStats});
  }
  render() {
    return (
    <div>
      <div className='title'><h1>JS Memory Game</h1></div>
      <Router>
        <div className='routes'>
          <Route exact path='/' component={Rules}/>
          <Route exact path='/board' component={Board}/>
          <Route exact path="/win" component={(props) => <Win  state={this.state}{...props}/> } />
          <Link to='/'>Home</Link>
        </div>
      </Router>
    </div>

  )}
}

export default App
