import styles from "./caracteristica.module.css";

import PropTypes from 'prop-types';

Caracteristica.propTypes = {
    type: PropTypes.string.isRequired,
    tarifa: PropTypes.shape({
        fibra: PropTypes.number,
        fijo: PropTypes.bool,
        megas: PropTypes.number,
        llamadas: PropTypes.bool
    })
};

function Caracteristica({ type = "", tarifa }) {
    const result = () => {
        switch (type) {
            case "fibra":
                return (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" color="#000">
                            <path fillRule="evenodd" fill="currentColor" d="M12.254 1.069l.074.053 11.5 10a.5.5 0 01-.24.87L23.5 12H21v10.5a.5.5 0 01-.41.492L20.5 23h-17a.5.5 0 01-.492-.41L3 22.5V12H.5a.5.5 0 01-.39-.814l.062-.064 11.5-10c.165-.142.4-.16.582-.053zM12 2.162L1.837 11H3.5a.5.5 0 01.492.41L4 11.5V22h16V11.5a.5.5 0 01.41-.492L20.5 11h1.663L12 2.162zM12 17c.551 0 1 .449 1 1 0 .551-.449 1-1 1-.551 0-1-.449-1-1 0-.551.449-1 1-1zm0-2c.951 0 1.825.436 2.398 1.198a.5.5 0 11-.798.601c-.767-1.017-2.437-1.016-3.2.001a.5.5 0 11-.8-.6A2.977 2.977 0 0112 15zm0-2a5 5 0 013.803 1.753.5.5 0 01-.761.65 3.998 3.998 0 00-6.084 0 .5.5 0 11-.76-.65A4.994 4.994 0 0112 13zm0-2c1.984 0 3.883.847 5.21 2.325a.5.5 0 11-.745.668A6.01 6.01 0 0012 12a6.01 6.01 0 00-4.467 1.995.5.5 0 11-.744-.668A7.011 7.011 0 0112 11z"></path>
                        </svg>
                        <p>Fibra <b>{tarifa.fibra < 1000 ? tarifa.fibra + " Mb" : tarifa.fibra / 1000 + " Gb"} {tarifa.fijo == true ? "+ Fijo" : ""}</b> </p>
                    </>
                );
            case "movil":
                // Falta el caso de Gb ilimitados, pero no las llamadas
                return (
                    <>
                        <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" color="#000">
                            <path fill="currentColor" d="M18.5.82h-12c-1.103 0-2 .897-2 2v20c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-20c0-1.103-.897-2-2-2zm-12 1h12c.551 0 1 .449 1 1v17h-14v-17c0-.551.449-1 1-1zm13 19v2c0 .552-.449 1-1 1h-12c-.551 0-1-.448-1-1v-2h14zm-5.5 1h-3a.5.5 0 100 1h3a.5.5 0 100-1zm-2-19h1a.5.5 0 01.09.992L13 3.82h-1a.5.5 0 01-.09-.992L12 2.82h1-1zm6 0a.5.5 0 110 1 .5.5 0 010-1z" fillRule="evenodd"></path>
                        </svg>
                        <p>Móvil con <b>{tarifa.megas > 0 ? (tarifa.megas < 1000 ? tarifa.megas + " Mb" : tarifa.megas / 1000 + " Gb") : "Gb"} {tarifa.llamadas == true ? "+ llamadas infinitas" : ""}</b></p>
                    </>
                );
                /*
            case "netflix":
                return (
                    <>
                        <div className={styles.netflixContainer}>
                            <svg width="80px" height="22px" viewBox="0 0 58 16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" color="#000">
                                <path d="M38.59 0h-2.442v14.025c2.22.078 4.43.193 6.63.344v-2.471a206.223 206.223 0 00-4.188-.243V0zM58 .001h-2.683L53.55 4.21 51.96.001h-2.643l2.84 7.52-3.1 7.379c.858.085 1.713.177 2.567.274l1.803-4.29 1.786 4.73c.93.122 1.857.25 2.783.386l.004-.002-3.181-8.425L58 0zM27.764 13.903l2.443-.001V8.197h3.31v-2.47h-3.31V2.495h4.375V0h-6.818v13.902zm-9.12-11.408h2.555v11.554c.814-.031 1.628-.057 2.443-.08V2.495h2.556V.001h-7.555v2.494zm-8.35 12.273c2.25-.21 4.512-.383 6.783-.518v-2.471c-1.451.086-2.898.188-4.341.304v-3.74c.947-.01 2.193-.04 3.298-.026V5.846c-.883-.002-2.3.013-3.298.026V2.495h4.341V0h-6.784v14.767zM5.501 9.055L2.322.002H0V16a195.63 195.63 0 012.443-.341v-8.7L5.27 15.3c.89-.106 1.781-.206 2.674-.3V0H5.502v9.054zm39.29 5.463c.816.064 1.63.133 2.443.207V0h-2.442v14.517z" fill="#D8232A"></path>
                            </svg>
                            <p>incluido</p>
                        </div>
                    </>
                );
                */
            case "permanencia":
                return (
                    <>
                        <p><b>Sin permanencia</b></p>
                    </>
                );
            default:
                break;
        }
    };
    return (
        <div className={styles.container}>
            {result()}
        </div>
    );

}
export default Caracteristica;