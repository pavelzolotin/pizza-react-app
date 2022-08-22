import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено</h1>
            <p className={styles.description}>Данная страница отсутствует</p>
        </div>
    )
}

export default NotFoundBlock;