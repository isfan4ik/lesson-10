
import styles from '../../../styles/Products.module.css'

const newLocal = async (context) => {
    const res = await fetch(`https://truestoreapi.com/products/${context.params.id}/`);
    const data = await res.json();
    return {
        props: { data }
    };
};
export const getStaticProps = newLocal

export const getStaticPaths = async () => {
    const res = await fetch(`https://truestoreapi.com/products`);
    const data = await res.json();
    const ids = data.map(item => (item.id));

  
    const newLocal = ids.map(item => ({ params: { id: item.toString() } }));
    const paths = newLocal;

    return {
        paths,
        fallback: true,
    }
}

const Item = ({data}) => {

    return (
        <div className={styles.itemContainer}>
            <h2>{data.title}</h2>
            <br /><p><img src={data.image} height="150" /></p>
            <br /><p>image url: {data.image}</p>
            <br /><p>price: ${data.price}</p>
            <br /><p>category: {data.category}</p>
            <br /><p>description: {data.description}</p>
        </div>
    )
}

export default Item;