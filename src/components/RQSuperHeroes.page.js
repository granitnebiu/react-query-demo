import { useQuery } from "react-query";
import axios from "../utils/axios";

const fetchSuperHeros = () => {
  return axios.get("/superheroes");
};
export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery("super-heros", fetchSuperHeros, {
    //cacheTime:5000, default value
    //  staleTime: 0, default value
    //refetchOnMount:true  default value ---- can be 'always' false
    //refetchOnWindowFocus:true  default value --- can be 'always' false
    refetchOnMount: true,
    refetchOnWindowFocus: true, // data will be automatically updated
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
