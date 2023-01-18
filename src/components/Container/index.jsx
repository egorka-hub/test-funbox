import cn from 'classnames'
import styles from './Container.module.scss'

const Container = ({children, className}) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {children}
    </div>
  )
}

export default Container
