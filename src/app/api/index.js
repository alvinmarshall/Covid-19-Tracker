import axios from "axios";

export const getTotalCountAsync = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("/");
      const { confirmed, recovered, deaths } = result.data;
      resolve({ confirmed, recovered, deaths });
    } catch (err) {
      reject(err);
    }
  });
};

export const getRecoveryAsync = (country) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url =
        country === null ? "/recovered" : `countries/${country}/recovered`;
      const result = await axios.get(url);
      resolve(result.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const getConfirmedAsync = (country) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url =
        country === null ? "/confirmed" : `countries/${country}/confirmed`;
      const result = await axios.get(url);
      resolve(result.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const getDeathAsync = (country) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = country === null ? "/deaths" : `countries/${country}/deaths`;
      const result = await axios.get(url);
      resolve(result.data);
    } catch (err) {
      reject(err);
    }
  });
};

export const getCountriesAsync = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("/countries");
      resolve(result.data);
    } catch (err) {
      reject(err);
    }
  });
};
