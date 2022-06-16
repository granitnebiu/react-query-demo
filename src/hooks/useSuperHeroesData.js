import { useQuery } from "react-query";
import axios from "../utils/axios";

const fetchSuperHeros = () => {
  return axios.get("/superheroes");
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeros, {
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data?.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
