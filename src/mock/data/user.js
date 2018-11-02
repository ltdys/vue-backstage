import {
  Random
} from 'mockjs';
const LoginUsers = [{
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'static/user.png',
    name: '管理员',
  },
  {
    id: 1,
    username: 'jp',
    password: '123456',
    avatar: 'static/user.png',
    name: '蒋鹏',
  }
];

const Users = [];

Users.push({
  id: Random.guid(),
  name: Random.cname(),
  addr: '广东省 深圳市 龙华新区',
  age: Random.integer(18, 60),
  birth: Random.date(),
  sex: Random.pick('male', 'female')
})
Users.push({
  id: Random.guid(),
  name: Random.cname(),
  addr: '广东省 深圳市 宝安区',
  age: Random.integer(18, 60),
  birth: Random.date(),
  sex: Random.pick('male', 'female')
})
Users.push({
  id: Random.guid(),
  name: Random.cname(),
  addr: '湖南省 永州 冷水滩区',
  age: Random.integer(18, 60),
  birth: Random.date(),
  sex: Random.pick('male', 'female')
})

for (let i = 0; i < 86; i++) {
  Users.push({
    id: Random.guid(),
    name: Random.cname(),
    addr: Random.county(true),
    age: Random.integer(18, 60),
    birth: Random.date(),
    sex: Random.pick('male', 'female')
  });
}
export {
  LoginUsers,
  Users
};
