export default function Header() {
	return (
		<div className="header">
			<h5>facebook/react</h5>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a className="nav-link disabled" href="http://" aria-disabled="true">
						Code
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="http://">
						Issues
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="http://" aria-disabled="true">
						Pull Requests
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="http://" aria-disabled="true">
						Actions
					</a>
				</li>
			</ul>
		</div>
	);
}
