"use client"
import React, { useState , useEffect } from 'react';
import styles from "@/components/catalogoDispositivos/catalogoDispositivo.module.css";
import DispositivoCard from "./dispositivoCard/DispositivoCard";

function CatalogoDispositivos() {
  const [dispositivo, setDispositivo] = useState('movil');
  const [data, setData] = React.useState([]);

  useEffect((type) => {
    fetch('https://my-json-server.typicode.com/bcristobal/fakeAPI/' + dispositivo)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log('Data fetched: ', data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, [dispositivo]);

  const handleDispositivoChange = (event) => {
    console.log('Dispositivo changed: ', event.target.value);
    setDispositivo(event.target.value);
    
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>Catálogo de dispositivos</h1>
      <form className={styles.formulario}>
        <input type="radio" id="movil" name="dispositivo" value="movil" onChange={handleDispositivoChange} checked={dispositivo === 'movil'} />
        <label htmlFor="movil">Móviles</label>
        <input type="radio" id="otros-dispositivos" name="dispositivo" value="otros-dispositivos" onChange={handleDispositivoChange} checked={dispositivo === 'otros-dispositivos'} />
        <label htmlFor="otros-dispositivos">Otros dispositivos</label>
      </form>
      <div className={styles.dispositivos}>
        <section className={styles.catalogo}>
          {data.map((dispositivo, index) => (
            <DispositivoCard key={index} data={dispositivo} />
          ))}
        </section>
      </div>
    </div>
  );
}
export default CatalogoDispositivos;