import { axios } from '../../helper/axios';

const fetchCounterService = () => {
  return new Promise((resolve, reject) => {
      axios.get(`/api/test`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}
export { fetchCounterService };
