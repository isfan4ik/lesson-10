import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Products from '../components/Products';

export const getStaticProps = async () => {

  const res = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
  const data = await res.json();

  if (!data) {
    return {
      notfound: true,
    }
  } else {
    return {
      props: {data},
    }
  }
}

export default function Home({data}) {
function Home(data) {
  
    const handleSubmit = async(event) => {
      event.preventDefault();
  
      const data = {
        id: event.target.id.value,
        title: event.target.title.value
      };
  
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      };
  
      const response = await fetch('/api/form', options);
      const result = await response.json();
      alert(`Title: ${result.title}`);
    }
  
}
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage SEO" />
        <meta name="keywords" content="homepage, keywords" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <h1>Home</h1><br />
      
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input type="text" id="title" name="title" placeholder="keyword search..." />
        <input type="hidden" id="id" name="id" value="123" />
        <button type="submit">Submit</button>
      </form>
      <p>&nbsp;</p>

      {
        <Products productsData={data} />
      }
    </div>
  )
}
