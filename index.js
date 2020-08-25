#!/usr/bin/env node
const program = require('commander');
const download = require('download-github-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const fs = require('fs');
const ora = require('ora');
const chalk = require('chalk');
const logSymbols = require('log-symbols');

// 使用Node开发命令行工具所执行的JavaScript脚本必须在顶部加入 #!/usr/bin/env node 声明
// 然后把脚本映射到全局的命令 然后去执行这个脚本

// console.log('as-cli 脚手架工具');


// 1. 获取用户输入的命令
// 原生获取命令行参数的方式，比较麻烦                
// console.log(process.argv);

// 使用commander模块处理命令行 比较方便
// npm install commander



// 
// 2. 根据不同的命令执行不同的功能操作




program
  .version('0.3.0') // -v 或者version的时候输出


const templates = {
    'tpl-a': {
        url: 'https://github.com/cxuhwiuefhuefu/tpl-a',
        downloadUrl: "https://github.com:cxuhwiuefhuefu/tpl-a#master",
        description: 'A模板'
    },
    'tpl-b': {
        url: 'https://github.com/cxuhwiuefhuefu/tpl-b',
        downloadUrl: "https://github.com:cxuhwiuefhuefu/tpl-b#master",
        description: 'B模板'
    },
    'tpl-c': {
        url: 'https://github.com/cxuhwiuefhuefu/tpl-c',
        downloadUrl: "https://github.com:cxuhwiuefhuefu/tpl-c#master",
        description: 'C模板'
    },
}
// as init a a-name  模板A 项目A  基于A项目进行初始化
// as init b b-name 基于b模板进行初始化



program
  .command('init <template> <project>')
  .description('初始化项目模板') // 运行该命令的提示文本
  // .option("-s, --setup_mode [mode]", "Which setup mode to use") // 选项
  .action(function(templateName, projectName){
    // 根据模板名下载对应的模板到本地并起名为projectName   
    // console.log(templateName, projectName);
    // console.log(templates[templateName])

    // 下载之前提示做loading提示 提示文本
    const spinner = ora('正在下载模板...').start();

    const { downloadUrl } = templates[templateName];
    
    // 仓库地址 下载路径 
    download('cxuhwiuefhuefu/tpl-a', projectName, (err) => {  // github仓库地址  下载路径  完整克隆
        if(err) {
            // 下载失败提示
            spinner.fail();
            console.log(logSymbols.error, chalk.red(err));
            return;
        }

        // 下载成功提示
        spinner.succeed();

        // 把项目下的package.json文件读取出来
        // 使用向导的方式采集用户输入的值
        // 使用模板引擎把用户输入的数据解析到package.json文件中
        // 解析完毕，把解析之后的结果重新写入package.json 文件中
        inquirer.prompt([{
          type: 'input',
          name: 'name',
          message: '请输入项目名称'
        },
        {
          type: 'input',
          name: 'description',
          message: '请输入项目简介'
        },
        {
          type: 'input',
          name: 'author',
          message: '请输入作者名称'
        }]).then((answers) => {

          // 把采集到的用户输入的数据解析替换到 package.json 文件中
          const packagePath = `${projectName}/package.json`;
          const packageContent = fs.readFileSync(packagePath, 'utf8') // 把路径读出来 二进制数据


          // 拿到包内容之后 用handerbars进行解析
          const packageResult = handlebars.compile(packageContent)(answers) // 把原理内容编译渲染成函数


          // 把结果重写进去本地文件当中
          fs.writeFileSync(packagePath, packageResult);
          console.log(logSymbols.success, chalk.yellow('初始化模板成功')); // 对勾, 带颜色的文本
        })
        

      })
  });


program
  .command('list')
  .description('查看所有可用模板')
  .action(() => {
      for(let key in templates) {
          console.log(`${key} ${templates[key].description}`)
      }
    //   console.log(`
    //   a a模板
    //   b b模板
    //   c c模板
    //   `)
  });

program.parse(process.argv)
