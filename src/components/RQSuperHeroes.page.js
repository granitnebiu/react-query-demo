import { useQuery } from "react-query";
import axios from "../utils/axios";

const fetchSuperHeros = () => {
  return axios.get("/superheroes");
};
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery("super-heros", fetchSuperHeros, {
    // we use stale time when we know that the list does not change often
    staleTime: 30000,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heros Page </h2>
      {data.data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};
