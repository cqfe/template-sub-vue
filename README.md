# 智能物联操作系统-name

### 技术栈：Vue3 + Vite + Vue-Router + VueUse + Axios + Ant-Design-Vue4.x

## [前端开发规范](https://ones.cisdigital.cn/wiki/#/team/SKG3mSQb/space/A8ZckFsc/page/Jj69ks48)

## 目录结构说明

```
|-- vue-template
    |-- .env---公共环境变量配置文件
    |-- .env.development---开发环境变量配置文件
    |-- .env.local---本地环境变量配置文件
    |-- .env.production---生产环境变量配置文件
    |-- .eslintrc.cjs
    |-- .gitignore
    |-- .prettierrc.json
    |-- README.md
    |-- index.html
    |-- package.json
    |-- pnpm-lock.json
    |-- vite.config.js
    |-- vitest.config.js
    |-- public
    |   |-- favicon.ico
    |-- src
        |-- App.vue
        |-- main.js
        |-- api---接口目录
        |   |-- list.js---列表数据相关接口
        |   |-- type.doc.js---jsdoc形式的数据类型定义
        |-- assets---资源目录
        |   |-- images
        |       |-- logo
        |   |-- styles
        |       |-- base.css---全局变量样式表
        |       |-- main.scss---公共样式表
        |-- components---通用组件目录（不包含业务逻辑的通用组件）
        |   |-- SvgIcon---svg图标组件
        |-- hooks---全局钩子
        |   |-- index.js
        |-- layouts
        |-- router---路由表
        |   |-- index.js
        |-- utils---通用工具函数
        |   |-- auth.js---工业互联网平台token鉴权
        |   |-- dict.js---字典表
        |   |-- request.js---请求函数封装
        |-- views---页面组件目录
            |-- list
```
