import axios from 'axios';

const fetchMarkets = async () => {
  try {
    let response = await axios.get(
      `${process.env.REACT_APP_BASE_COINGECKO_API_URL}/coins/markets?vs_currency=eur`
    );

    return response.data;
  } catch (error) {
    // For PROD, log errors to something like TrackJS, etc. 
    console.error(error);
  }
};

export { fetchMarkets };
