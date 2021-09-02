import { ResponseCodeEnum } from '@/config/const/httpEnum';

const getRes = (data, type = 'success', dataKey = 'data', params = {}) => {
  const res = {
    success: params => {
      return {
        code: ResponseCodeEnum.SUCCESS,
        [dataKey]: data,
        ...params
      };
    },
    error: params => {
      return {
        code: ResponseCodeEnum.ERROR,
        [dataKey]: data,
        error: data,
        ...params
      };
    }
  };
  return res[type] && typeof res[type] === 'function' ? res[type](params) : res.success(params);
};

export { getRes };
