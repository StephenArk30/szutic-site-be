# szutic-site-be
深圳大学腾讯创新俱乐部后端

## Introduction

### 修改数据库密码
修改models/db.js下的密码、地址等为远程或自己的数据库。

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