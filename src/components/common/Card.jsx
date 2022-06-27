import { Link } from 'react-router-dom'

import '../../styles/modules/card.sass'

function Card({ image, title, to, classes = '' }) {
  return (
    <div className={`card ${classes}`.trim()}>
      <Link to={to}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
      </Link>
    </div>
  )
}

export default Card
