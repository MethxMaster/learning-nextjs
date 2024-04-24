import Image from "next/image"
import Head from "next/head"
import styles from '@/styles/id.module.css'
// import { useRouter } from "next/router";

export async function getStaticPaths(){
    const res = await fetch('https://dummyjson.com/products?limit=12')
    const data = await res.json()
    const paths = data.products.map((e)=>{
        return {
            params:{id:String(e.id)}
        }
    })
    return {
        paths,
        fallback : false
    }
}


export async function getStaticProps({params}){
    const id = params.id
    console.log(params.id)
    const res = await fetch('https://dummyjson.com/products/' + id)
    const data = await res.json()

    return {
        props:{products:data}
    }
}


export default function ProductionDetail({products}){
    /*
     ---- get import parameter by decalration ----
    const router = useRouter()
    const {props} = router.query
    */

    return (

        <>
            <Head>
                <title>{products.title}</title>
            </Head>
            <section className={styles['container']}>
                <div className={styles['photo-box']}>
                    <Image src={products.thumbnail} alt={products.title} width={300} height={300}/>
                </div>
                <article className={styles['detail-box']}>
                    <h3>{products.title}</h3>
                    <p>brand : {products.brand}</p>
                    <p>price : ${products.price}</p>
                    <p>description : {products.description}</p>
                    <p>qty : {products.stock}</p>
                    <p>rating : {products.rating}</p>
                    
                </article>
            </section>
        </>
    );
}