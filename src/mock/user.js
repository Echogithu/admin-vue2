import Mock from 'mockjs';
import * as utils from '@/mock/utils';

const users = [
  {
    id: 1,
    username: 'admin',
    name: '超级管理员',
    password: '123456',
    token: 'amdintoken'
  },
  {
    id: 2,
    username: 'inkAdmin',
    name: '墨水瓶管理员',
    password: '123456',
    token: 'inkAdmin'
  }
];

Mock.mock('/login', 'post', options => {
  console.log('options :>> ', options);
  const { username, password } = JSON.parse(options.body);
  const user = users.find(item => item.username === username && item.password === password);

  if (user) {
    return utils.getRes({
      userInfo: {
        id: user.id,
        username: user.name
      },
      token: user.token
    });
  } else {
    return utils.getRes('找不到该用户或者密码错误', 'error');
  }
});

Mock.mock('/logout', 'post', () => {
  return utils.getRes({
    data: true
  });
});
