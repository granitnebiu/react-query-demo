import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heros", fetchSuperHeros);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>RQ Super Heros Page </h2>
      {data.data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};
