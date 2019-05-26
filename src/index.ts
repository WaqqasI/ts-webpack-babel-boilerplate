import React from 'react'
import ReactDOM from 'react-dom'

function greet(name : string) {
  return Hello + name
}

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          {greet('naqib')}
        <p />
      <div />
    )
  }
}

ReactDOM.render(App, document.getElementById('root'))