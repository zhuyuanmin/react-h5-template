import styles from './App.module.scss'

function App(props) {
  return <div className={styles['card']}>{props.children}</div>
}

export default App
