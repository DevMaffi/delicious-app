import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'

import { NavIconButton } from './common'

import '../styles/modules/categories.sass'

function Categories() {
  return (
    <nav className="categories__list">
      <NavIconButton
        to="/cuisine/Italian"
        iconComponent={FaPizzaSlice}
        label="Italian"
      />
      <NavIconButton
        to="/cuisine/American"
        iconComponent={FaHamburger}
        label="American"
      />
      <NavIconButton
        to="/cuisine/Vietnamese"
        iconComponent={GiNoodles}
        label="Vietnamese"
      />
      <NavIconButton
        to="/cuisine/Korean"
        iconComponent={GiChopsticks}
        label="Korean"
      />
    </nav>
  )
}

export default Categories
