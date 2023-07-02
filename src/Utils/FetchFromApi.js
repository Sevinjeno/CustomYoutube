import axios from "axios";


const Base_Url='https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    url:Base_Url,
    params: {part: 'snippet', videoId: 'M7FIvfx5J10',maxResults:'10'},
    headers: {
      // 'X-RapidAPI-Key':process.env.API_KEY,
      'X-RapidAPI-Key':"29d57b4e25msh72f1853037e5c53p1a56cbjsnd32eef9e116e",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromApi=async(url)=>{
    const {data} = await axios.get(`${Base_Url}/${url}`,options);

    return data;
  }