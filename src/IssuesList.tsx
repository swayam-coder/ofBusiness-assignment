import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import useGetInfo from "./hooks/getInfo";
import { useCallback, useRef, useState } from "react";

export default function Issueslist() {
	const [pageNo, setPageNo] = useState<number>(1);

	const { loading, error, hasMore } = useGetInfo(
		"https://api.github.com/repos/facebook/react/issues",
		pageNo
	);

	const observer = useRef<IntersectionObserver>();

	const lastIssueElement = useCallback(
		(node: any) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNo((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<>
			<Header />
			<Main // since the component depth is not too much so I'm not using any gobal state management rather using prop-drilling instead
				lastIssueElement={lastIssueElement}
				hasMore={hasMore!}
				error={error!}
				loading={loading!}
			/>
		</>
	);
}
