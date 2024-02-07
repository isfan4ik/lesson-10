import styles from '../../styles/About.module.css';
import Head from 'next/head';

export const getStaticProps = () => {
    const SEOdata = [{
        "desc": "React",
        "keywords": "React, page, keywords, goes, here",
        "robots": "main, follow"
    }];

    return {
        props: {SEOdata}
    }
}

export default function About({SEOdata}) {
    return (
        <>
            <Head>
                <title>BUigdfj</title>
                <meta name="description" content={SEOdata[0].desc} />
                <meta name="keywords" content={SEOdata[0].keywords} />
                <meta name="robots" content={SEOdata[0].robots} />
            </Head>

            <div className="mainContainer">
                <h1 className={styles.titleColor}>About Us</h1><br />
                <p>Creating easy learning programming tutorials for everyone.</p>
            </div>
        </>
    )
}