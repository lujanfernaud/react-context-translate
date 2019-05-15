import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

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
        <ColorContext.Provider value={'primary'}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App
