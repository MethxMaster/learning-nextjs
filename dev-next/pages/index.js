import styles from '@/styles/home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque incidunt perspiciatis harum illum ipsum autem eius odio mollitia laudantium.</p>
        <Link href='/product' className={styles['btn']}>Shop</Link>
      </div>
    </>
  );
}

