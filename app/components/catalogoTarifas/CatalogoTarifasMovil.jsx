"use client"
import { useEffect, useState } from 'react';
import Card from "../card/Card";
import styles from "./catalogoTarifasFibraMovil.module.css"

function CatalogoTarifasMovil() {

    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(4); // Initial visible data

    const loadMore = () => {
        setVisible((prevValue) => prevValue + 4); // Load 4 more items
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/bcristobal/fakeAPI/tarifas-movil');
                const data = await response.json();
                setData(data);
                console.log('Data fetched: ', data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tarifas móvil 5G</h1>
            <div className={styles.div}>
                {data.slice(0, visible).map((data, index) => (
                    <Card key={index} type={"movil"} data={data} />
                ))}
            </div>
            <div className={styles.containerButton}>
                {visible < data.length &&
                    <button onClick={loadMore}>Cargar más tarifas</button>
                }
            </div>
        </div>
    );
}

export default CatalogoTarifasMovil;