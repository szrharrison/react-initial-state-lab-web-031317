import React from 'react'

class Bomb extends React.Component {
  constructor() {
    super()

    this.state = {
      secondsLeft: null
    }
  }

  render() {
    this.state.secondsLeft = this.props.initialCount
    let returnString = `${this.state.secondsLeft} seconds left before I go boom!`
    if (this.state.secondsLeft == 0) {
      returnString = 'Boom!'
    }
    return (
      <p>{returnString}</p>
    )
  }
}

export default Bomb
