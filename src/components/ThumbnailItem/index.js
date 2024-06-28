import './index.css'

const Thumbnailitem = props => {
  const {content, changes, currentState} = props
  const {thumbnailUrl, imageAltText, thumbnailAltText} = content

  const makechanges = () => changes(imageAltText)

  const active = imageAltText !== currentState ? 'active' : ''
  return (
    <li className={`item-container ${active}`}>
      <button className="button" type="button" onClick={makechanges}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="item" />
      </button>
    </li>
  )
}

export default Thumbnailitem
