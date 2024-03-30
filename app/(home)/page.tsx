import Link from "next/link";
import styles from "./Home.module.css";
const URL = "https://books-api.nomadcoders.workers.dev/lists";

interface BookCategory {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
}

async function getBookCategories(): Promise<BookCategory[]> {
	const response = await fetch(URL);
	const json = await response.json();
	return json.results;
}

export default async function Home() {
	const books = await getBookCategories();
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-12">
			<div className={styles.bookList}>
				{books.map((book: BookCategory) => (
					<Link
						href={`/list/${book.list_name_encoded}`}
						key={book.list_name}
					>
						<button>{book.display_name}</button>
					</Link>
				))}
			</div>
		</main>
	);
}
