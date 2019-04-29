# Travis
 [ˈtrævɪs]  [官网](https://www.travis-ci.org/)
 > 非常流行的开源持续集成构建项目，和GO的区别采用`yaml`格式，清新简洁。广受Github基友喜爱。  

 今天讲一下，FeSidle使用的Travis CI的事；  
 
![travis](https://i.loli.net/2019/04/29/5cc69cfa9e4f4.png)  

![构建记录](https://i.loli.net/2019/04/29/5cc69d4628029.png)  

## 注册Travis  

关联github即可，会调用githu的钩子函数获取你的项目，在项目栏目打开你需要构建的项目监听即可。  

![打开项目开关](https://i.loli.net/2019/04/29/5cc69e3bf1023.png)  

## 创建授权token  

> 这个比较关键，没有授权token无法通过验证，提示无权限，name名可自定义

### 获取token  

首先在github的 setting -> developer setting -> personal access token一栏点击generate new token， 这下面的选项全选，然后就会生成一个token，复制这个token。  

选中关键授权，如果分不清可以全选。github有白名单不用担心别人拿到你token做坏事。  
![创建token](https://i.loli.net/2019/04/29/5cc6a671b0d2b.png)

### 配置token

![关联token](https://i.loli.net/2019/04/29/5cc69fda623b8.png)  

 
## 创建配置脚本  

> //项目根目录创建deploy.sh文件
```

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 注意这里是加入Travis配置的推送
git push -f https://${your_token}@github.com/fewalksideways/FeSidle.git master:gh-pages  

//看清楚你的用户名/项目名   后面是pages的分支

cd -
```  

## 创建执行脚本  

> //项目根目录创建travis.yml执行脚本
```
language: node_js
sudo: required
node_js:
  - 8.11.3
branch: master
cache:
  directories:
    - node_modules
before_install:
  - export TZ='Asia/Shanghai'  # 设置时区
script:
  - ./deploy.sh
//以上是基础配置，还可以支持ssh，git等

```  
将deploy.sh变成可执行文件
```
git update-index --add --cnmod=+x deploy.sh

```
或者  

```
 chmod +x deploy.sh
```

## 注意

- [vuepress创建项目](https://zhuanlan.zhihu.com/p/36116211),[vuepress官方文档](https://vuepress.vuejs.org/zh/)

- 修改package.json 可以通过命令直接上传 vuepress推荐  
  
- [vuepress添加评论插件](./gitalk.md)










