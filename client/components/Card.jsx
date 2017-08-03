import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Card ({isRevealed, card, clickCard}) {
  return (
    <div className="card" onClick={() => clickCard(card)}>
      {isRevealed && <p>{card.text}</p>}
    </div>
  )
}

// export default class Card extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isUncovered: false
//     }
//   }
//   toggleCover() {
//     this.setState({
//       isUncovered: !this.state.isUncovered
//     })
//   }
//
//   render() {
//     return (
//       <div className="card" onClick={this.toggleCover.bind(this)}>
//         {this.state.isUncovered && <p>{this.props.data.text}</p>}
//
//       </div>
//     )
//   }
// }
