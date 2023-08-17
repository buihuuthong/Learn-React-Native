import AxiosClient from './AxiosClient';

// Cấu hình category api cơ bản:

const userApi = {
  getAll: () => {
    return AxiosClient.get('users');
  },
};

export default userApi;
