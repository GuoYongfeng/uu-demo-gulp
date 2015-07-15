
# uu-demo-gulp

## 简介

* 仓库中代码为示例代码，使用gulp进行构建，能够使用commonjs规范进行代码的灵活书写，对React的使用尝试后暂不考虑加入本示例。

## 技术要素及功能

> gulp

* 使用gulp进行整体的构建
* 可以进行代码的合并压缩优化
* 可以实时解析less文件为css
* 可以将js文件合并为一个bundle.js
* 支持浏览器livereload

> commonjs

* commonjs规范书写代码，兼容后端npm包
* 代码编写过程只需关注模块的require以及代码逻辑，exports输出编写的模块即可
* 使用browserify将js文件合并成一个输出文件

> less

* 支持less格式书写css样式
* 且less可实时输出到浏览器查看效果

> 响应式

* rem和百分比作为单位，可以使页面进行跨端跨平台适配

## 使用指南

* 下载node并安装
* cd到该仓库目录，执行npm install
* 调试：执行gulp命令即可

## 目录说明

* app目录目前存放模版文件
* node_modules目录为npm安装的一些模块包文件
* public为静态资源文件，包含**js** **css** **images**，直接提供给模版文件引用
* src为编译前的源文件，包含less的样式文件以及js模块文件
