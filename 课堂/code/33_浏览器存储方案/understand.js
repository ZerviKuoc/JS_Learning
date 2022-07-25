// “其实cookie算不上一种存储方案---why”，
// 他其实是：客户端和服务端沟通的时候携带的数据
// 虽然客户端这边总有一个cookie，但是这个cookie不是客户端存的，是服务器存的
// 服务器在给客户端发送请求数据的响应的时候，有一个字段是set-cookie
// 客户端接收到这个字段就主动存了，所以一般情况下，并不是客户端主动发起存储的


/*
  WebStorage 提供了一种机制，比cookie更直观的key和value的存储方式
  他提供了两种：
  1、 localStorage： 本地存储 ---- 提供一种永久性的存储方法，在关闭网页重新打开的时候，存储内容仍然保留
  2、 sessionStorage： 会话存储。提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除。
  3、 IndexedDB
*/

/*
IndexedDB 是一种数据库
他是一种事务型数据库系统，基于JS面向对象数据库，有点类似于非关系型数据库NoSQL

事务的解释： 比如 A转给B 100块，要执行 A-100和B+100的操作，这两个操作不能是并行
但是又要保证，断电等突发情况，不会导致A扣了钱，B没加钱，
这里就通过事务，把 A扣钱和B加钱 作为一个操作单元。让A和B同时完成，只有同时都完成才算完成
只要突发情况导致一个不完成，就都回滚


在浏览器F12的Application的Local Storage 和 IndexedDB中，会发现，好像存的形式差不多，都是key和value表
但是，Local Storage的value存的是字符串，如果value是一个对象，有name属性，他还是转化为字符串存，
这时，如果要想通过 value中对象的name属性为yyy 来查找对应的 key，就必须遍历，查找赛选
而 IndexedDB就是以数据库的形式保存了数据，对象也可以保存，检索效率高很多
*/