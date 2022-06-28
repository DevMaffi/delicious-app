import { motion } from 'framer-motion'

import { Popular, Veggies } from '../components'

function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Popular />
      <Veggies />
    </motion.div>
  )
}

export default Home
