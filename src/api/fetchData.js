import axios from 'axios';

const URL = '';

const fetchData = async (query) => {
    const response = await axios.get(URL);
}