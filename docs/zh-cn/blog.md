# Github 
## 漂亮的图标
![](https://img.shields.io/badge/npm-0.2.0-brightgreen.svg) ![](https://img.shields.io/badge/license-MIT-blue.svg)  

[图标生成](https://shields.io/)  

[Gif生成](http://www.recordit.co/)  

[GitTalk](./gittalk.md)

# NPM 
## 注册
[singup](https://www.npmjs.com/signup)  

`如果用了淘宝的镜像，需要先切换回npm`  
```
npm config set registry http://registry.npmjs.org
```  
## 登陆  
在Git终端登陆  
```
npm login  
Username:****  
Password:****  
Email:*****  

```  
## 发布  
```
npm publish
```
## 忽略目录
`.npmignore`  
```
examples/
packages/
public/
vue.config.js
babel.config.js
*.map
```  
`package.json`  [属性大全](https://www.cnblogs.com/tzyy/p/5193811.html)
```
"name":"MaleWeb",
"version":"1.0.1",
"description":"项目描述",
"main":"项目主入口,依赖包加载的入口common/umd",
"keyword":"关键字",
"author":"MaleWeb",
"private":"true"  //为true，npm会拒绝发布
```


