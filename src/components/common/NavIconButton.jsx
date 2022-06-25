import { NavLink } from 'react-router-dom'

import '../../styles/modules/icon-button.sass'

function NavIconButton({ to, iconComponent: IconComponent, label }) {
  return (
    <NavLink className="icon-button" to={to}>
      <IconComponent />
      <h4>{label}</h4>
    </NavLink>
  )
}

export default NavIconButton
