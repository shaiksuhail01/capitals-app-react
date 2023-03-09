import {Component} from 'react'

import CapitalItem from '../CapitalItem'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectValue: countryAndCapitalsList[0].id,
    countryOfCapital: countryAndCapitalsList[0].country,
  }

  onChangeCapital = event => {
    const selectedCapitalCountry = event.target.value
    const filteredCountry = countryAndCapitalsList.filter(
      eachObj => eachObj.id === selectedCapitalCountry,
    )

    this.setState({
      selectValue: selectedCapitalCountry,
      countryOfCapital: filteredCountry[0].country,
    })
  }

  render() {
    const {selectValue, countryOfCapital} = this.state
    return (
      <div className="divContainer">
        <div className="cardContainer">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="selectContainer"
            id="selectElement"
            value={selectValue}
            onChange={this.onChangeCapital}
          >
            {countryAndCapitalsList.map(eachCapital => (
              <CapitalItem key={eachCapital.id} details={eachCapital} />
            ))}
          </select>
          <label className="label" htmlFor="selectElement">
            is capital of which country?
          </label>
          <p className="country">{countryOfCapital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
