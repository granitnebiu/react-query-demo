import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fatching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering fatching", error);
  };
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(
    onSuccess,
    onError
  );
  // console.log({ isLoading, isFetching });
  console.log(data);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heros Page </h2>
    </>
  );
};
