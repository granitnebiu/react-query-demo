import { useState } from "react";
import { useQuery } from "react-query";
import axios from "../utils/axios";

const fetchSuperHeros = () => {
  return axios.get("/superheroes");
};
export const RQSuperHeroesPage = () => {
  const [refetchInterval, setRefetchInterval] = useState(3000);
  const onSuccess = (data) => {
    console.log(data.data.length);
    if (data.data.length === 4) {
      return setRefetchInterval(
        console.log("existing data " + data.data.length + " pulling stoped " + false)
      );
    } else {
      return refetchInterval + console.log("trying to refetch others");
    }
    //console.log("Perform side effect after data fatching", data);
  };
  const onError = (error) => {
    if (error) {
      setRefetchInterval(console.log("there are no more then for users" + false));
    }

    //console.log("Perform side effect after encountering fatching", error);
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
