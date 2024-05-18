import { useRouteError } from "react-router-dom";
import "../scss/styles.scss"

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-body">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}