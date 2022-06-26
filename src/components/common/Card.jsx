import '../../styles/modules/card.sass'

function Card({ image, title, classes = '' }) {
  return (
    <div className={`card ${classes}`.trim()}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  )
}

export default Card
