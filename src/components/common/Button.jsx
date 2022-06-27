function Button({ active, children, ...rest }) {
  const classes = ['button']

  if (active) classes.push('active')

  return (
    <button className={classes.join(' ')} type="button" {...rest}>
      {children}
    </button>
  )
}

export default Button
