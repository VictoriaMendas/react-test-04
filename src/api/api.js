import axios from "axios";

const API_KEY = "szbM16EAhzO0kLss1Ju44HsQ0Yt_BmVLCl__F_lHpCg";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.params = {
  client_id: API_KEY,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get("/search/photos", {
    params: {
      query: query,
      page,
      per_page: 16,
      orientation: "landscape",
    },
  });

  return response.data;
};
