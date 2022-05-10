import { v4 as uuid } from "uuid";

export default function Listitem({
	issueRef,
	result,
	key
}: {
	issueRef?: any;
	result: any;
	key: any;
}) {
	return (
		<li
			ref={issueRef}
			className="list-group-item d-flex justify-content-between align-items-center"
			key={key}
		>
			<div>
				<a href={result.url} className="issuetitle">
					{result.title}{" "}
				</a>
				<div>
					{result.labels.map((l: any) => (
						<span
							key={uuid()}
							style={{ backgroundColor: `#${l.color}` }}
							className="badge rounded-pill"
						>
							{l.name}
						</span>
					))}
				</div>
			</div>
			<div>
				<small>
					#{result.number} opened on {result.created_at.split("T")[0]} by{" "}
					{result.user.login}
				</small>
			</div>
		</li>
	);
}
