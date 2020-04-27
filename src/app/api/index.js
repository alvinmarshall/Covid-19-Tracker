import axios from "axios";

export const getTotalCountAsync = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("/");
      const { confirmed, recovered, deaths, lastUpdate } = result.data;
      resolve({ confirmed, recovered, deaths, lastUpdate });
    } catch (err) {
      reject(err);
    }
  });
};

export const getDailyTotalCountAsync = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get("/daily");
      const data = result.data.map((item) => ({
        confirmed: item.confirmed.total,
        deaths: item.deaths.total,
        date: item.reportDate,
      }));

      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export const getTotalCountryCountAsync = (country = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = country === null ? "/" : `countries/${country}`;
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
      resolve(result.data.countries);
    } catch (err) {
      reject(err);
    }
  });
};
