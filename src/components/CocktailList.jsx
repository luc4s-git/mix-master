import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList.js';

export default function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>
        No drinks found matching the search parameter.
      </h4>
    );
  }

  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      drinkName: strDrink,
      image: strDrinkThumb,
      isAlcoholic: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => (
        <CocktailCard key={item.id} {...item}></CocktailCard>
      ))}
    </Wrapper>
  );
}
