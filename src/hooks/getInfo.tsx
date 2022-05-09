import { useEffect, useState } from "react";
import { useResultContext } from "./resultContext";

export default function useGetInfo(url: string, pageNo: number) {
	const [error, setError] = useState<boolean>();
	const [loading, setLoading] = useState<boolean>();
	const [hasMore, setHasMore] = useState<boolean>();
	const { results, setResults } = useResultContext();

	useEffect(() => {
		setLoading(true);
		setError(false);
		try {
			fetch(`${url}?page=${pageNo}&per_page=10`)
				.then((res) => {
					if (!res.ok) {
						setError(true);
						console.log(res);
						throw new Error("Response not OK");
					}
					return res.json();
				})
				.then((data) => {
					setResults(data);
					setHasMore(data.length > 0);
					setLoading(false);
				});
		} catch (error) {
			console.log(error);
		}
	}, [pageNo, url]);

	useEffect(() => {
		setResults([]);
	}, []);

	return { loading, error, results, hasMore };
}
