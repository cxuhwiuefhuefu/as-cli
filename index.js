#!/usr/bin/env node
const { program } = require('commander');
const download = require('download-github-repo');

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
        url: 'https://github.com/cxuhwiuefhuefu/Happy-puzzle',
        downloadUrl: "https://github.com/cxuhwiuefhuefu/Happy-puzzle#master",
        description: 'A模板'
    },
    'tpl-b': {
        url: 'https://github.com/cxuhwiuefhuefu/Happy-puzzle',
        downloadUrl: "https://github.com/cxuhwiuefhuefu/Happy-puzzle#master",
        description: 'B模板'
    },
    'tpl-c': {
        url: 'https://github.com/cxuhwiuefhuefu/Happy-puzzle',
        downloadUrl: "https://github.com/cxuhwiuefhuefu/Happy-puzzle#master",
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
    //   console.log(templateName, projectName);
    // console.log(templates[templateName])

    
    const { downloadUrl } = templates[templateName];
    // 仓库地址 下载路径 
    download(downloadUrl, projectName, { clone: true }, (err) => {
        if(err) {
            console.log('下载失败');
        }else {
            console.log('下载成功');
        }
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

program.parse(process.argv);
