
import styles from '@/styles/about.module.css'
import Link from 'next/link';

export default function About(){
    return (
        <>
            <div className={styles.container}>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque incidunt perspiciatis harum illum ipsum autem eius odio mollitia laudantium.</p>
                <Link href='/product' className={styles['btn']}>Shop</Link>
            </div>
        </>
    );  
}