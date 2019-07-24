//这个配置文件是一个JS文件 
// 通过node中的模块操作，向外暴露了一个配置对象
const path=require('path')
const webpack=require('webpack')
// 导入生成在内存中的HTML页面的插件
// 只要是插件  都要放在Plugins节点中去
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
	
module.exports={//需要手动指定输入和输出
	entry:path.join(__dirname,'./src/main.js'),
	//入口 表示要使用webpack打包哪个文件
	output:{
		//输出文件的配置
		path:path.join(__dirname,'./dist'),//指定输出文件的路径
		filename:'bundle.js'//指定输出文件的名称
	},
	//当在命令行 输入webpack时
	// 1.webpack 发现没有通过命令行的方式写入出口和入口
	// 2.去找webpack.config.js中找到出入口
	// 3.解析这个文件   解析执行完之后  就会得到输出文件
	plugins:[
		new webpack.HotModuleReplacementPlugin(),


		new htmlWebpackPlugin({
		//这是在内存中生成html的插件
		template:path.join(__dirname,'./src/index.html'),
		//根据指定路径 生成内存中的页面
		filename:'index.html'//生成页面的名称
		}),
		  new VueLoaderPlugin() //vue-loader 需要加载一个VueLoaderPlugin  并且需要在上方引入
	],
	module:{//这个位置为存放所有第三方模块
		rules:[
			//test 为正则，use后指  使用哪个加载器处理CSS
			//不管是CSS文件还是less scss都必须先调用这两个基本加载器  再调用自己的加载器
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'},
			// use中写入需要的loader   例如sass或fileloader只是内部以来所需要的  
			{test:/\.(jpg|png|jpeg|gif|bmp)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
			// 配置转换高级的ES6语法
			 {test:/\.vue$/,use:'vue-loader'}

		]
	},
	resolve:{
		alias:{//修改Vue被导入时包的路径
			"vue$":"vue/dist/vue.js"
		}
	}
}