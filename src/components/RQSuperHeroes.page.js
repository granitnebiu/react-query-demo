import { useQuery } from "react-query";
import axios from "../utils/axios";

const fetchSuperHeros = () => {
  return axios.get("/superheroes");
};
export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fatching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering fatching", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    {
      onSuccess,
      onError,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heros Page </h2>
      <button onClick={refetch}>Fetch Heros</button>
      {data?.data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};
