import styles from '../components/FakeComponent.module.css';

export function FakeComponent() {
    return (
        <div className={styles.body}>
            <h1>FakeComponent being tested</h1>
        </div>
    )   
}