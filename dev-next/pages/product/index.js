import styles from '@/styles/product.module.css'
import Image from 'next/image';

export default function Product(){
    return (
        <>
            <div className={styles.container}>
                <h1>Product</h1>
                <Image src='/store.jpg' alt='about' width={200} height={100}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque incidunt perspiciatis harum illum ipsum autem eius odio mollitia laudantium.</p>
            </div>
        </>
    );
}