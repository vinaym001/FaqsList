import './index.css'

const FaqItem = props => {
  const {faqDetails, iconOnclick, iconIsClicked} = props

  const {id, questionText, answerText} = faqDetails

  const onIconBtnClick = () => {
    iconOnclick(id)
  }

  const iconImgUrl = iconIsClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const iconName = iconIsClicked ? 'minus' : 'plus'
  return (
    <li className="li-container">
      <div className="faq-item">
        <h1 className="faq-que">{questionText}</h1>
        <button onClick={onIconBtnClick} className="icon-button" type="button">
          <img src={iconImgUrl} className="icon" alt={iconName} />
        </button>
      </div>
      {iconIsClicked && (
        <div>
          {' '}
          <hr className="hr-line" /> <p className="faq-ans">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
