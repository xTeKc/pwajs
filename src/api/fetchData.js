import axios from 'axios';

const URL = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

export const fetchData = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            cName: 'name',
            cSymbol: 'symbol',
            cContract: 'contract'
        }
    });

    return data;
}