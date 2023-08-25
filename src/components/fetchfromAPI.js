import axios from "axios";

const APIKEY = "39048222-1b0288216bbb2669db0a92bec";
const BaseURL = `https://pixabay.com/api/?key=${APIKEY}`;

export const fetchfromAPI = async (url) =>{
    const { data } = await axios.get(`${BaseURL}&${url}`);
    return data;
}

const BasevideoURL = `https://pixabay.com/api/videos/?key=${APIKEY}`

export const fetchvideoAPI = async (url) => {
    const { data } = await axios.get(`${BasevideoURL}&${url}`);
    return data;
}

fetchvideoAPI()