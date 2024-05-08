import styles from "./yoigocard.module.css"
import PropTypes from 'prop-types';

YoigoCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

function YoigoCard({ title, description, image }) {
    return (
        <article className={styles.container}>
            <img src={image} alt={title} width={50} height={50} />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
export default YoigoCard;