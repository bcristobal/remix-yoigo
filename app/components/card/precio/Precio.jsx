import styles from "./precio.module.css";
import PropTypes from 'prop-types';

Precio.propTypes = {
    precio: PropTypes.shape({
        inicial: PropTypes.number.isRequired,
        final: PropTypes.number.isRequired,
        duracion: PropTypes.number.isRequired
    }).isRequired
};

function Precio({ precio }) {
    return (
        <div className={styles.container}>
            <div className={styles.initialPrice}>
                <p className={styles.entire}>{Math.floor(precio.inicial)}</p>
                <div className={styles.decimalPart}>
                    <p className={styles.decimal}>&apos;{(precio.inicial - Math.floor(precio.inicial)).toFixed(2) * 100 === 0 ? "00" : (precio.inicial - Math.floor(precio.inicial)).toFixed(2) * 100} &euro;/mes</p>
                    <div className={styles.other}>
                        <p>{precio.duracion === 0 ? "Precio final" : "Durante " + precio.duracion + " meses"} </p>
                        <p>IVA. incluido</p>
                    </div>
                </div>
            </div>
            {precio.duracion === 0 ? null : <p className={styles.finalPrice}>{Math.floor(precio.final).toFixed(2)} &euro;/mes</p>}
        </div>
    );
}
export default Precio;