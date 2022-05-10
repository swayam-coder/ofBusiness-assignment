import { useEffect, useState } from "react";

export default function useGetRepoInfo(url: string) {
	const [error, setError] = useState<boolean>();
	const [loading, setLoading] = useState<boolean>();
	const [results, setResults] = useState<any>({});

	useEffect(() => {
		setLoading(true);
		setError(false);
		try {
			fetch(url)
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
					setLoading(false);
				});
		} catch (error) {
			console.log(error);
		}
	}, [url]);

	useEffect(() => {
		setResults({});
	}, []);

	return { loading, results, error };
}
