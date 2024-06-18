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
                {type === "fibra-movil" ?     <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" color="#000"><path fillRule="evenodd" fill="currentColor" d="M12.254 1.069l.074.053 11.5 10a.5.5 0 01-.24.87L23.5 12H21v10.5a.5.5 0 01-.41.492L20.5 23h-17a.5.5 0 01-.492-.41L3 22.5V12H.5a.5.5 0 01-.39-.814l.062-.064 11.5-10c.165-.142.4-.16.582-.053zM12 2.162L1.837 11H3.5a.5.5 0 01.492.41L4 11.5V22h16V11.5a.5.5 0 01.41-.492L20.5 11h1.663L12 2.162zM12 17c.551 0 1 .449 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.551.449-1 1-1zm0-2c.951 0 1.825.436 2.398 1.198a.5.5 0 11-.798.601c-.767-1.017-2.437-1.016-3.2.001a.5.5 0 11-.8-.6A2.977 2.977 0 0112 15zm0-2a5 5 0 013.803 1.753.5.5 0 01-.761.65 3.998 3.998 0 00-6.084 0 .5.5 0 11-.76-.65A4.994 4.994 0 0112 13zm0-2c1.984 0 3.883.847 5.21 2.325a.5.5 0 11-.745.668A6.01 6.01 0 0012 12a6.01 6.01 0 00-4.467 1.995.5.5 0 11-.744-.668A7.011 7.011 0 0112 11z"></path></svg> : null} 

            </div>
        </article>
    );
}
export default Card;