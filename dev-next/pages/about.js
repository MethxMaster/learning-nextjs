
import styles from '@/styles/about.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function About(){
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="keywords" content="learning,Nextjs,programming"/>
            </Head>
            <div className={styles.container}>
                <h1>About</h1>
                <Image src='/about.jpg' alt='about' width={200} height={100}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque incidunt perspiciatis harum illum ipsum autem eius odio mollitia laudantium.</p>
                <Link href='/product' className={styles['btn']}>Shop</Link>
            </div>
        </>
    );  
}