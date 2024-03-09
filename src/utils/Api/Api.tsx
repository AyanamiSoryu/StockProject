import axios from 'axios';
import md5 from 'md5';

const API_URL = 'https://api.valantis.store:41000/';
const PASSWORD = 'Valantis';

const generateAuthToken = (): string => {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  return md5(`${PASSWORD}_${timestamp}`);
};

const getHeaders = () => ({
  headers: {
    'Content-Type': 'application/json',
    'X-Auth': generateAuthToken()
  }
});

export const getIds = async (offset: number, limit: number) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        action: 'get_ids',
        params: { offset, limit }
      },
      getHeaders()
    );
    return response.data.result as string[];
  } catch (error) {
    console.error('Error fetching IDs:', error);
    throw error;
  }
};

export const getItems = async (ids: string[]) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        action: 'get_items',
        params: { ids }
      },
      getHeaders()
    );
    return response.data.result;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const getFields = async (field: string, offset: number, limit: number) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        action: 'get_fields',
        params: { field, offset, limit }
      },
      getHeaders()
    );
    return response.data.result;
  } catch (error) {
    console.error('Error fetching fields:', error);
    throw error;
  }
};

export const filterProducts = async (filters: { [key: string]: string | number }) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        action: 'filter',
        params: filters
      },
      getHeaders()
    );
    return response.data.result as string[];
  } catch (error) {
    console.error('Error filtering products:', error);
    throw error;
  }
};
