import styles from './Header.module.css'

export function Header(props){
    return (
        <header className={styles.header} >
            <strong>Ignite Feed</strong>
        </header>
    )
}