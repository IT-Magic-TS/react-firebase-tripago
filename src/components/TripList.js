import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function TripList() {
  // const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, isPending, error } = useFetch(url);

  // const fetchTrips = useCallback(async () => {
  //   const response = await fetch(url);
  //   const json = await response.json();
  //   setTrips(json);
  // }, [url]);
  // useEffect(() => {
  //   fetchTrips();
  // }, [fetchTrips]);

  return (
    <div className="w3-container w3-center">
      <h2>Trip List</h2>
      {isPending && (
        <div className="w3-container w3-padding w3-center">
          <div className="w3-spin" style={{ fontSize: "64px" }}>
            ..
          </div>
        </div>
      )}
      {error && (
        <div className="w3-panel w3-padding w3-centr w3-red">{error}</div>
      )}
      <ul className="w3-ul">
        {trips &&
          trips.map((trip, index) => (
            <li className="w3-margin w3-grey w3-round-large" key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="w3-container">
        <button
          className="w3-btn w3-green w3-margin"
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trips
        </button>
        <button
          className="w3-btn w3-grey w3-margin"
          onClick={() => setUrl("http://localhost:3000/trips")}
        >
          All Trips
        </button>
      </div>
    </div>
  );
}
