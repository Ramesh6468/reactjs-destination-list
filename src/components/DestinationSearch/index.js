// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    input: '',
  }

  onChangeSearchInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <div className="searchContainer">
          <h1 className="title">Destination Search</h1>
          <div className="inputElement">
            <input
              type="search"
              className="inputBox"
              placeholder="Search"
              value={input}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="searchIcon"
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(eachDestination => (
              <DestinationItem
                key={eachDestination.id}
                destinationDetails={eachDestination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
