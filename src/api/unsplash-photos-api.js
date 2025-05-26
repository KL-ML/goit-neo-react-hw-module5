import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com';
const MY_KEY = 'MGPCuL7nFqbwR9fCDUkEbvkC0WcTxVjmGgzkhMQetUQ';

axios.defaults.baseURL = BASE_URL;

export const fetchPhotosWithQuery = async (query, page) => {
  const { data } = await axios.get(
    `/search/photos`,
    {
      params: {
        client_id: MY_KEY,
        page,
        query,
        per_page: 12,
        orientation: 'landscape',
      },
    }
  );

  return data;
};
