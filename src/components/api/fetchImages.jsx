import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32869255-acb467910c721877b1bf35e4f';

export const fetchImages = async (inputValue, pageNr) => {
  const response = await axios.get(`${BASE_URL}?q=${inputValue}&page=${pageNr}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

   return response.data.hits.map(image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    };
  });
};
