const URL = "https://books-api.nomadcoders.workers.dev/list?name=";
import Image from "next/image";
import styles from "./BookCover.module.css";

interface BookList {
	title: string;
	author: string;
	book_image: string;
	amazon_product_url: string;
}

async function getBookList(category: string): Promise<BookList[]> {
	try {
		const response = await fetch(`${URL}${category}`);
		const json = await response.json();
		return json.results.books;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export default async function BookList({
	params: { id },
}: {
	params: { id: string };
}) {
	const books = await getBookList(id);
	return (
		<div className={styles.booksGrid}>
			{books.map((book, index) => (
				<div key={index} className={styles.bookContainer}>
					<div className={styles.wrapper}>
						<div className={styles.bookCover}>
							<Image
								src={book.book_image}
								alt={book.title}
								layout="fill"
								objectFit="cover"
								className={styles.bookCoverImage}
							/>
						</div>
					</div>
					<h2 className={styles.bookTitle}>{book.title}</h2>
					<span className={styles.bookAuthor}>{book.author}</span>
					<a
						href={book.amazon_product_url}
						className={styles.cartButton}
					>
						<svg
							data-slot="icon"
							fill="none"
							stroke-width="1.5"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							width="24"
							height="24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
							></path>
						</svg>
					</a>
				</div>
			))}
		</div>
	);
}
