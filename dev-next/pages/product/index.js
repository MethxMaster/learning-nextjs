import styles from '@/styles/product.module.css'
import Image from 'next/image';
import Head from 'next/head';


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
                
                {
                    productData.map(dataArray=>{
                        return  (
                            <div key={dataArray.id}>
                                {dataArray.title} <Image src={dataArray.thumbnail} alt={dataArray.title} width={50} height={50}/>
                            </div>
                        );
                    })
                }

            </div>
        </>
    );
}