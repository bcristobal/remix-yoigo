import styles from "@/components/catalogoDispositivos/dispositivoCard/dispositivo.module.css";
import PrecioDispositivo from "@/components/catalogoDispositivos/dispositivoCard/PrecioDispositivo";

function DispositivoCard ( {data} ) {
    return (
        <article className={styles.container}>
            <div className={styles.movile}>
                {/*
                TODO: Render the image of the device
                 */}
                 <img src={data.img} alt="imagen del dispositivo" width={200} />
                 <div className={styles.text}>
                    <p>{data.marca}</p>
                    <h3>{data.nombre}</h3>
                 </div>
            </div>
            
            <PrecioDispositivo precio={data.precio} />
            <p className={styles.tarifa}>{data.tarifa}</p>

        </article>
    );
}
export default DispositivoCard;