import axios from "axios";
import { getBeersUrl } from "../utils/urls";

export const fetchBeers = async () => {
  const { data } = await axios.get(getBeersUrl);
  return data;
};
