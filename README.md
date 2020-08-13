# as-cli
航展项目的脚手架





`npm install --global vue-cli`  会有命令行vue

`vue list` 项目模板

`vue init` 初始化项目骨架


`vue init webpack vue-demo`  vue脚手架会帮你下载vue的模板
- 这些项目文件是从webpack模板这里面来的 它把github上的仓库下载到我们本地 在本地通过向导的方式做了一些修改 然后用户在这选择定制 最终产出对应的项目
- 脚手架就是把基础的东西准备好 当你在用的时候这些一条命令 把基础结构快速的准备好了
- 就是帮你这个项目基础结构去公共的放到我们的github上 当你想去创建一个项目的时候 我们可以利用这个脚手架 帮我们快速的构建出来了 
- 把通用的脚手架放在GitHub上 执行命令初始化这个项目出来  不需要再本地维护这些文件
- 就是输入一条命令 输入命令之后会联网下载对应命令的模板 把这个模板下载到本地 下载到本地之后 我们再通过这种交互式一问一答的方式让用户对这个
- 模板做这种细节化定制 最终完成对这些文件的细节修改 如果模板发生改动，只需要更新模板即可，不需要用户更新脚手架


`npm init -y` 初始化 package.json文件
对象的key就是你想要命令的名字
把命令链接到全局
配置package.json bin字段
npm link



## 命令行工具参数设计
`as -h|--help`  查看使用帮助

`as -V|--version`

`as list` 列出所有可用模板
`as init <template-name> <project-name>`基于指定的模板进行项目初始化 `<>`是必填的参数
`as build` 构建项目原型  
其他根据需求加就行了 

准备模板

`download-git-repo`帮我们下载github上对应的仓库到我们的本地




命令行交互
模板引擎替换掉
`handlebars` 当做模板引擎处理字符串的

`inquirer`向导 报名 命令行交互 采集用户输入的数据

最后用数据将模板引擎整合到我们本地文件当中 最后给他重写一下



视觉美化
下载模板的过程中 用户感知不到正在下载 加loading效果 
`ora`


`chalk` 给命令行的输出文本添加颜色

`log-symbols`日志符号


把工具发布到npm 发包 别人也可以npm install --global as-cli