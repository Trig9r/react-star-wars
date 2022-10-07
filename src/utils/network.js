import axios from 'axios';
import { HTTP, HTTPS } from '@constants/api';

/**
 * Изменяет URL c HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с https
 */
export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

/**
 * Отправляет запрос на получение данных с API
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.warn(err);
    alert('Ошибка получений данных с API');
    return false;
  }

  // axios
  //   .get(url)
  //   .then(({ data }) => console.log(data.results))
  //   .catch((err) => {
  //     console.warn(err);
  //     alert('Не удалось получить данные о людях');
  //   });
};

// (async () => {
//   const data = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//   console.log(data);
// })();

export const makeConcurrentRequest = async (url) => {
  const res = await Promise.all(
    url.map((res) => {
      return axios.get(res).then(({ data }) => data);
    }),
  );

  return res;
};
