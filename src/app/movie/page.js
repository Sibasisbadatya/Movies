import React from 'react';
import Link from 'next/link';
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';
const movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7e303cd5f5msha2909317898e81bp1e5049jsnaf3cafdb3f00',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };
    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(data.titles);
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series and Movies</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default movie
