import Wrapper from '../assets/wrappers/Error';
import { Link, useRouteError } from 'react-router-dom';
import notFound from '../assets/not-found.svg';

export default function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt="404" />
          <h3>Ohh my gah!</h3>
          <p>Im sorry, we can't seem to find the page you are looking for.</p>
          <Link to="/">Home</Link>
        </div>
      </Wrapper>
    );
  }

  console.log(error);

  return (
    <Wrapper>
      <div>
        <h3>Oh my gah! Im sorry! Something went wrong!</h3>
      </div>
    </Wrapper>
  );
}
