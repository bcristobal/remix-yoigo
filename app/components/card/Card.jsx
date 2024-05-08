import Caracteristicas from "./caracteristicas/Caracteristicas";
import styles from "./card.module.css";
import Precio from './precio/Precio';

import PropTypes from 'prop-types'; // Import PropTypes
// Add prop validation for 'data.precio'
Card.propTypes = {
    type: PropTypes.string.isRequired, // Add prop validation for 'type'
    data: PropTypes.shape({
        precio: PropTypes.shape({
            inicial: PropTypes.number.isRequired,
            final: PropTypes.number.isRequired,
            duracion: PropTypes.number.isRequired,
        }).isRequired
    })
};


function Card({ type, data }) {

    return (
        <article className={styles.container}>
            <div className={styles.div}>
                <Precio precio={data.precio} />
                <a href="#SpecificInfo">Ver tarifa</a> {/* Remove empty expression */}
                <Caracteristicas type={type} data={data} />
            </div>
        </article>
    );
}
export default Card;