// 一些工具函数

/**
 * @description:  是否为链接
 */
function isLink(key) {
  return /http(s)?:/.test(key);
}

export { isLink };
