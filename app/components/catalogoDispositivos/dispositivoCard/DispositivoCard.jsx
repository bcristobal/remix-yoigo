import styles from "./dispositivo.module.css";
import PrecioDispositivo from "./PrecioDispositivo";

import PropTypes from 'prop-types';

            DispositivoCard.propTypes = {
                data: PropTypes.shape({
                    img: PropTypes.string, // Add the missing prop validation for 'img'
                    marca: PropTypes.string,
                    nombre: PropTypes.string,
                    precio: PropTypes.shape({
                        mensual: PropTypes.number,
                        duracion: PropTypes.number
                    }),
                    tarifa: PropTypes.string
                })
            };

function DispositivoCard({ data }) {
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