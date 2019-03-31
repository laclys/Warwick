### About Webpack

url-loader 
优：生成base64较少http请求
缺 ：加大代码体积，减慢渲染速度
优化：options中配制 limit字段，（小图base64，大图http请求）

loader的执行顺序是从下到上，从右到左

css-loader：把一个或多个css文件合并成一段css代码
style-loader：把css代码挂载到<head></head>中间

为css3特性添加厂商前缀：
postcss-loader：
新建postcss.config.js用作postcss-loader的配置文件
这里我们想要让webpack帮我们添加厂商前缀就要使用到Postcss-loader中名为 authprefixer的插件

