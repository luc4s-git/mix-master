import { useRouteError } from 'react-router-dom';

export default function SinglePageError() {
  const error = useRouteError();
  return <h2>there was an error...</h2>;
}
