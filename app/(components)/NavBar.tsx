import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
	return (
		<>
			<div className={styles.custom_shape_divider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
						className={styles.custom_shape_divider_fill}
					></path>
				</svg>
			</div>
			<div className={styles.navBarContainer}>
				<div className={styles.navLinks}>
					<Link href={"/"}>
						<div className={styles.buttone5}>Home</div>
					</Link>
					<Link href="/about">
						<div className={styles.buttone5}>About</div>
					</Link>
				</div>
				<div className={styles.title}>New York Times Best Sellers</div>
			</div>
		</>
	);
}
