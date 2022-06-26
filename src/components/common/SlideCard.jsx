import '../../styles/modules/slide-card.sass'

function SlideCard({ title, image }) {
  return (
    <div className="slide-card">
      <p>{title}</p>
      <img src={image} alt={title} />
      <div className="gradient"></div>
    </div>
  )
}

export default SlideCard
