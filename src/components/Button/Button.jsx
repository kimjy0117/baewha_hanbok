import styles from './Button.module.css'

function Button({ children, variant = 'default', ...props }) {
  const className = [styles.button, variant === 'primary' ? styles.primary : ''].join(' ')
  return (
    <button className={className} {...props}>{children}</button>
  )
}

export default Button


