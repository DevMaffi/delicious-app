import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'

import { NavIconButton } from './common'

import '../styles/modules/categories.sass'

function Categories() {
  return (
    <nav className="categories__list">
      <NavIconButton
        to="/cuisine/italian"
        iconComponent={FaPizzaSlice}
        label="Italian"
      />
      <NavIconButton
        to="/cuisine/american"
        iconComponent={FaHamburger}
        label="American"
      />
      <NavIconButton
        to="/cuisine/thai"
        iconComponent={GiNoodles}
        label="Thai"
      />
      <NavIconButton
        to="/cuisine/japanese"
        iconComponent={GiChopsticks}
        label="Japanese"
      />
    </nav>
  )
}

export default Categories
