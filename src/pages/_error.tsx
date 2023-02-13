import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
	const error: any = useRouteError();
	if (isRouteErrorResponse(error)) {
		return (
			<p>
				{error.status} {error.statusText}
			</p>
		);
	}
	return <p>{error.message || "Unknown Error"}</p>;
};

export default Error;
