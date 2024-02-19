import { Link, useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

export default function CocktailCard({
  image,
  drinkName,
  id,
  isAlcoholic,
  glass,
}) {
  // const data = useOutletContext();

  return (
    <Wrapper>
      <div className="img-container">
        <img className="img" src={image} alt={drinkName} />
      </div>
      <div className="footer">
        <h4>{drinkName}</h4>
        <h5>{glass}</h5>
        <p>{isAlcoholic}</p>
        <Link className="btn" to={`/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </Wrapper>
  );
}
