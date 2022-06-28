import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

import '../styles/modules/nav.sass'

function NavBar() {
  return (
    <nav className="nav">
      <GiKnifeFork />
      <Link className="nav__logo" to="/">
        delicious
      </Link>
    </nav>
  )
}

export default NavBar
