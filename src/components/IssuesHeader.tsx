import useGetRepoInfo from "../hooks/getRepoInfo";

export default function IssuesHeader() {
	const { results, loading, error } = useGetRepoInfo(
		"https://api.github.com/repos/facebook/react"
	);

	return (
		<div className="issuesheader">
			{!loading && !error && <p>{results.open_issues} Open Issues</p>}
		</div>
	);
}
