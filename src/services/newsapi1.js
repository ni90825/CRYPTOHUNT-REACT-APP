import axios from "axios";

class news {
    newscalling(search="cryptocurrency",count){
        return axios.post(
            
            'https://newsnow.p.rapidapi.com/',
        {
            "text": search,
            "region": "wt-wt",
            "max_results": count
        },
        {
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'cd5e412f4dmsh2b52296403d4a54p10be59jsnd657c1483ed5',
                'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
              },
        }
        )
    }
};

export default new news();