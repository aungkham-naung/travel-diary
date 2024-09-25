import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // TEMP DATA
  const { id } = useParams();
  const navigate = useNavigate();

  const { getCity, currentCity, isLoading } = useCities();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );
  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const { cityName, emoji, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>{" "}
      </div>
    </div>
  );

  // return (
  //   <>
  //     <h1>City {id}</h1>
  //     <p>
  //       Lat: {lat}, Lng: {lng}
  //     </p>
  //   </>
  // );
}

export default City;
