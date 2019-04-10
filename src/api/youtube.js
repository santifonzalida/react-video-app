import axios from 'axios';

const KEY = 'AIzaSyAedbpKxY4zbxGTHKa_DjJzX3k3rXytlcM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key : KEY
  }
});
