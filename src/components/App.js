import React, { Component } from 'react'
import UserCreate from './UserCreate'

class App extends Component {
  state = {
    language: 'english',
  }

  handleLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:{' '}
          <i className="flag us" onClick={() => this.handleLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.handleLanguageChange('dutch')} />
        </div>

        <br />

        <UserCreate />
      </div>
    )
  }
}

export default App
