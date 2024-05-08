import styles from "./footer.module.css";
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <h3>Lo Más Buscado</h3>
                    <ul>
                        <li><a href="/">Ofertas Internet Móvil</a></li>
                        <li><a href="/about">Mejor Oferta Fibra</a></li>
                        <li><a href="/contact">Mejor oferta fibra, móvil y Netflix</a></li>
                        <li><a href="/services">Fibra 1Gb + Móvil Infinito</a></li>
                        <li><a href="/services">Fibra 1Gb</a></li>
                        <li><a href="/services">Agile TV</a></li>
                        <li><a href="/services">Descuentos y Ofertas</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Móviles</h3>
                    <ul>
                        <li><a href="/">Apple</a></li>
                        <li><a href="/about">Samsung</a></li>
                        <li><a href="/contact">OPPO</a></li>
                        <li><a href="/services">Xiaomi</a></li>
                        <li><a href="/services">Honor</a></li>
                        <li><a href="/services">Honor</a></li>
                        <li><a href="/services">Motorola</a></li>
                        <li><a href="/services">ZTE</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="/about">Roaming</a></li>
                        <li><a href="/contact">Llamadas internacionales</a></li>
                        <li><a href="/services">Seguimiento de pedido</a></li>
                        <li><a href="/services">No me funciona internet</a></li>
                        <li><a href="/services">Condiciones renuevo</a></li>
                        <li><a href="/services">Test de velocidad</a></li>
                        <li><a href="/services">Opiniones</a></li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <h3>Enlaces de Interés</h3>
                    <ul>
                        <li><a href="/about">Acceso Mi Yoigo</a></li>
                        <li><a href="/contact">Internet segunda residencia</a></li>
                        <li><a href="/services">Tiendas Yoigo</a></li>
                        <li><a href="/services">Recarga de saldo</a></li>
                        <li><a href="/services">Cobertura de fibra</a></li>
                        <li><a href="/services">Cobertura de fibra</a></li>
                        <li><a href="/services">Contacto</a></li>
                    </ul>
                </div>

            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;