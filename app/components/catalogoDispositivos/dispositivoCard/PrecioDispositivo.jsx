import styles from "@/components/catalogoDispositivos/dispositivoCard/precioDispositivo.module.css"

function PrecioDispositivo({ precio }) {
    return (
        <div className={styles.container}>
            <div className={styles.initialPrice}>
                <p className={styles.entire}>{Math.floor(precio.mensual)}</p>
                <div className={styles.decimalPart}>
                    <p className={styles.decimal}>&apos;{(precio.mensual - Math.floor(precio.mensual)).toFixed(2) * 100 === 0 ? "00" : (precio.mensual - Math.floor(precio.mensual)).toFixed(2) * 100} &euro;/mes</p>
                    <div className={styles.other}>
                        <p>{"Durante " + precio.duracion + " meses"} </p>
                        <p>IVA. incluido</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PrecioDispositivo;