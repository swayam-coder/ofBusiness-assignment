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
			{result.title}
			<span className="badge bg-primary rounded-pill">14</span>
		</li>
	);
}
