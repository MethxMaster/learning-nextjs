import styles from '@/styles/product.module.css'
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';


export async function getStaticProps(){
    const res = await fetch('https://dummyjson.com/products?limit=12')
    const apiData = await res.json()
    return {
        props:{api:apiData}
    }
}

export default function Product(props){

    const {api} = props
    const productData = api.products

    return (
        <>
            <Head>
                <title>Product</title>
                <meta name="keywords" content="learning,Nextjs,programming"/>
            </Head>
            <div className={styles.container}>
                <h1>Product</h1>
                <Image src='/store.jpg' alt='about' width={200} height={100}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque incidunt perspiciatis harum illum ipsum autem eius odio mollitia laudantium.</p>
                
                <div className={styles['container-item']}>
                {
                    productData.map(dataArray=>{
                        return  (
                            <div key={dataArray.id} className={styles['item-box']}>
                                    <div className={styles['title-item-box']}>{dataArray.title}</div>
                                    <Link href={'/product/' + dataArray.id}>
                                        <Image src={dataArray.thumbnail} alt={dataArray.title} width={300} height={300}/>
                                    </Link>
                            </div>
                        );
                    })
                }
                </div>

            </div>
        </>
    );
}