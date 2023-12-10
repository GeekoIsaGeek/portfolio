import styles from './Main.module.css';
import Socials from './Socials';
const Main = () => {
	return (
		<main className={styles.wrapper}>
			<article>
				<h3 className={styles.greeting}>Hey there!</h3>
				<h3 className={styles.me}>
					I'm <span>Giorgi Kvrivishvili </span>
				</h3>
				<h4>a Full-Stack Web Developer</h4>
			</article>
			<Socials />
		</main>
	);
};

export default Main;