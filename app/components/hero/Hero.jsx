import styles from "./hero.module.css"

const Hero = () => {
    return (
        <section className={styles.container}>
            <img
                src="/hero.webp"
                width={650}
                height={400}
                alt="Hero section"
            />
        </section>
    );
};

export default Hero;