import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  //if acc's element doesnt not contain the country of the current element in the city array, we append the current element's country and its emoji to acc's array
  //else return acc

  const countries = cities.reduce((acc, cur) => {
    if (!acc.map((el) => el.country).includes(cur.country))
      return [...acc, { country: cur.country, emoji: cur.emoji }];
    else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
