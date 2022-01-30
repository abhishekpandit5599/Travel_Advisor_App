import axios from 'axios';

// Rapid Api - Travel Advisor
// 2900a3b81dmshf6899266f0aa685p1c707djsn9f26fd39e047
// 8e4fffa113msha4b3401e3125721p14b45fjsnc97c4bd0e06f
// 331485e3dfmsh1d9cbbab5d07497p19452bjsnc0ecd9228aab

export const getPlacesData = async (type,sw,ne) => {
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '331485e3dfmsh1d9cbbab5d07497p19452bjsnc0ecd9228aab'
            },
        });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}