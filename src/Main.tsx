import { useResultContext } from "./hooks/resultContext";
import IssuesHeader from "./IssuesHeader";
import ListItem from "./ListItem";
import { v4 as uuid } from "uuid";

export default function Main({
	lastIssueElement,
	loading,
	hasMore,
	error
}: {
	lastIssueElement: (node: any) => void;
	loading: boolean;
	hasMore: boolean;
	error: boolean;
}) {
	const { results } = useResultContext();

	return (
		<div className="issues">
			<IssuesHeader />
			<ul className="list-group">
				{hasMore &&
					results.map((result, index) => {
						if (results.length === index + 1) {
							return (
								<ListItem
									issueRef={lastIssueElement}
									result={result}
									key={uuid()}
								/>
							);
						} else {
							return <ListItem result={result} key={uuid()} />;
						}
					})}
			</ul>

			<div>{loading && "Loading..."}</div>
			<div>{error && "Error"}</div>
		</div>
	);
}
