import styles from "./yoigoSection.module.css"
import YoigoCard from "./yoigoCard/yoigoCard";

import PropTypes from 'prop-types';

YoigoSection.propTypes = {
  title: PropTypes.string.isRequired,
};

function YoigoSection({ title }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.container}>{title}</h2>
      <div className={styles.cards}>
        <YoigoCard
          title="Personas que atienden a personas"
          description="Si nos llamas y quieres ser
          atendido por una persona, te atenderá 
          una persona. Y desde nuestro servicio 
          de atención al cliente en España. 
          Gente maja no, majísima."
          image="https://images.ctfassets.net/tzu1pd8bi7co/454wP451qrONWYfFXgnFd3/4c96c0f149bff26ca8a84b4ee2e3a332/group-copy-3.svg"
        />
        <YoigoCard
          title="Te echamos un cable donde estés"
          description="Tenemos una gran red de cobertura, 
          ¡llega hasta el quinto pino! Porque tenemos un 
          super despliegue de red y acuerdos con los que 
          poder llegar cada vez más lejos, estés donde 
          estés."
          image="https://images.ctfassets.net/tzu1pd8bi7co/4quTGazjfvFCiy4WIQNFVA/092ee237bf071e8831caf75968611126/group-copy-2.svg"
        />
        <YoigoCard
          title="Somos altavoz de iniciativas sociales"
          description="Con nuestro proyecto social 
          “Pienso, Luego Actúo” apoyamos cientos de 
          proyectos que trabajan para hacer las cosas 
          mejor por la sociedad. Y todo gracias a los 
          que estáis en Yoigo que lo hacéis posible."
          image="https://images.ctfassets.net/tzu1pd8bi7co/FI7tq6Pp6zmyklkZubpPa/e51b4bdc173eb6d555dd53ad8978fd0a/group-copy-4.svg"
        />
      </div>
    </section>
  );
}
export default YoigoSection;