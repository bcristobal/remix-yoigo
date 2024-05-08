import Caracteristica from './Caracteristica';
import styles from "./caracteristicas.module.css";

function Caracteristicas({ type, data }) {
    // Falta un type en función de la tarifa(fibra movil o solo movil)
    const result = () => {
        switch (type) {
            case "fibra-movil":
                return (
                    <div className={styles.container}>
                        <Caracteristica type="fibra" tarifa={data} />
                        <Caracteristica type="movil" tarifa={data.movil} />
                        {data.netflix ? <Caracteristica type="netflix" /> : null}
                    </div>
                );
            case "movil":
                return (
                    <div className={styles.container}>
                        <Caracteristica type="movil" tarifa={data} />
                        {data.permanencia ? null : <Caracteristica type="permanencia"/>}
                    </div>
                );
        }
    };
    return result();
}
export default Caracteristicas;