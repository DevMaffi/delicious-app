import '../../styles/modules/icon-button.sass'

function NavIconButton({ to, iconComponent: IconComponent, label }) {
  return (
    <div className="icon-button" to={to}>
      <IconComponent />
      <h4>{label}</h4>
    </div>
  )
}

export default NavIconButton
