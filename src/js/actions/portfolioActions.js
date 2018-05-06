import client from '../helpers/client';
import { FETCH_PORTFOLIO } from './types';

export const fetchPortfolio = () => (dispatch) => {
  client.getEntries({
    content_type: 'images',
    'sys.id': '2zM3anyHyQSkK0Qmmik0mG',
  })
    .then((entry) => {
      const payload = [];
      const descriptions = entry.items[0].fields.descriptions;
      const images = entry.items[0].fields.image;
      images.forEach((image, i) => {
        payload.push({
          title: image.fields.title,
          description: descriptions[i],
          image_url: image.fields.file.url,
          url: image.fields.description,
        });
      });
      dispatch({
        type: FETCH_PORTFOLIO,
        payload,
      });
    });
};
