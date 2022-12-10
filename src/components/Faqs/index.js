import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {iconIsClicked: false}

  iconOnclick = id => {
    this.setState(prevState => ({
      iconIsClicked: !prevState.iconIsClicked,
    }))
  }

  render() {
    const {faqsList} = this.props
    const {iconIsClicked} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <FaqItem
                key={eachItem.id}
                faqDetails={eachItem}
                iconOnclick={this.iconOnclick}
                iconIsClicked={iconIsClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
