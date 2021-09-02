/**
 * @description: 请求结果集
 */
const ResultEnum = {
  SUCCESS: 0,
  ERROR: -1,
  TIMEOUT: 10042,
  TYPE: 'success'
};

/**
 * @description: 请求结果code集
 */
const ResponseCodeEnum = {
  SUCCESS: 0,
  CREATE_SUCCESS: 200,
  EXPIRE: 401,
  ERROR: 400
};

/**
 * @description: 请求方法
 */
const RequestMethodEnum = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

/**
 * @description:  常用的contentTyp类型
 */
const ContentTypeEnum = {
  // json
  JSON: 'application/json;charset=UTF-8',
  // json
  TEXT: 'text/plain;charset=UTF-8',
  // form-data 一般配合qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA: 'multipart/form-data;charset=UTF-8'
};

export { ResultEnum, ResponseCodeEnum, RequestMethodEnum, ContentTypeEnum };
