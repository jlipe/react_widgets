import axios from 'axios';

const KEY = "AIzaSyAI88eAhC8RYnBPrKqkD_OR9Mn12Bit0d8";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});
