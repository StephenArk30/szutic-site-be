# szutic-site-be
深圳大学腾讯创新俱乐部后端

## Introduction

### 修改数据库密码
修改config.js下的密码、地址等为远程或自己的数据库。

### WebStorm或PhpStorm
右上角 add configuration 添加 npm，command 选 start

### cmd
cd 入当前文件夹执行
```
npm start
```

### 新增table时使用Sequelize导出模型
使用[sequelize](https://github.com/andyforever/sequelizer)工具导出数据库表模型到models文件夹，并修改models/index.js。

[Sequelize报错](https://www.jianshu.com/p/c8eb6d2471f8)

## 代码结构
  
  以下这些是会用到的文件，别的可以不管它
  ```
  .
  ├── bin
  |	├── www \\ 这是运行文件，npm start 相当于 npm start bin/www
  ├── utils \\ 公用方法
  ├── models \\ 数据库表的类
  |	├── index.js \\ 新增一个表并用sequlize导入文件夹后，要在这里export
  |	├── db.js \\ 数据库配置文件
  ├── views \\ 渲染页面
  |	├── index.jade \\ api首页
  |	├── error.jade \\ 出错信息页
  |	├── layout.jade \\ 布局模板
  ├── routes \\ 代码写这里
  ├── router.js \\ 在这里添加路由后才能访问该url
  ├── app.js \\ app入口
  ├── config.js \\ 配置项，例如口令、数据库配置等
  ├── README \\ 使用说明
  ├── .gitignore \\ 不想让git跟踪的文件列表
  ```
