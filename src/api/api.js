import axios from "axios"

const API_KEY = "szbM16EAhzO0kLss1Ju44HsQ0Yt_BmVLCl__F_lHpCg";
axios.default.baseURL = "https://api.unsplash.com/";
axios.default.params = {
    client_id : API_KEY,
}

const fetchImages = async (query, page) => {
    const response = await axios.get('/search/photos', params: {
        query:query, page, per_page: 16, orientation: portrait
        console.log(response.data)
    })
    return response.data
}