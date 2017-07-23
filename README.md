# 开始学习Vue啦
### 这个仓库算是一个对自己学习状态的记录吧，↖(^ω^)↗
* 2017.4.24[搞了一个斐波那契数列](https://catsugar.github.io/Learn-Vue/myVueAPP-1/MyVueAPP-1.html)
* 2017.4.29  todo list
* Vue建购物结算的例子
   * [购物车页面](https://catsugar.github.io/Learn-Vue/myVueAPP-3/shopcar.html)
   * [地址页面](https://catsugar.github.io/Learn-Vue/myVueAPP-3/address.html)
（模板用的之前仿的天猫购物车静态页面，当时我为什么写的这么。。。[○･｀Д´･ ○]）

***
   * [测试1](https://catsugar.github.io/saowen/APP/cover.html)
   * [测试1](https://catsugar.github.io/saowen/APP/author.html)
   * [测试1](https://catsugar.github.io/saowen/APP/novel.html)
   * [测试1](https://catsugar.github.io/saowen/APP/search.html)
   * [测试1](https://catsugar.github.io/saowen/APP/login.html)
   * [测试2](https://catsugar.github.io/saowen/WEB/index.html)
   * [测试2](https://catsugar.github.io/saowen/WEB/author.html)
   * [测试2](https://catsugar.github.io/saowen/WEB/novel.html)
   * [测试2](https://catsugar.github.io/saowen/WEB/search.html)
   * [测试2](https://catsugar.github.io/saowen/WEB/back.html)
***
## 记录一下Vue安装搭建过程。

#### 安装npm,vue

```
cnpm install npm -g
cnpm install vue
```
#### 安装 vue-cli

```
cnpm install --global vue-cli

```
#### 创建模板

```
vue init webpack  (your project name)

```

#### 编译环境
```
cd (your project name)
cnpm install
cnpm run dev

访问 http://localhost:8088
```
## 记录一下webpack安装过程。

#### 初始化npm

```
npm  init

```
#### 安装webpack

```
npm  install webpack --save-dev

```
#### 打包

```
webpack （文件名） （打包后的文件名）
```
#### 安装loader

```
npm install style-loader css-loader --save-dev
webpack （文件名） （打包后的文件名） --module-bind 'css=style-loader!css-loader' --watch
```