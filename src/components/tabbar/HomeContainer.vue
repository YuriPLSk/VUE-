<template>
	<div>
		<!-- 轮播 -->
		<mt-swipe :auto="3000" class="mint-swipe">
  			<mt-swipe-item>1</mt-swipe-item>
  			<mt-swipe-item>2</mt-swipe-item>
  			<mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		<!-- 6宫格 -->
		<ul style="background-color: white;border:none" class="mui-table-view mui-grid-view mui-grid-9">
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
	                <span class="mui-icon mui-icon-home"></span>
	                <div class="mui-media-body">新闻</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
	                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
	                <div class="mui-media-body">图片分享</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
	                <span class="mui-icon mui-icon-chatbubble"></span>
	                <div class="mui-media-body">商城购买</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
	                <span class="mui-icon mui-icon-location"></span>
	                <div class="mui-media-body">留言反馈</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
	                <span class="mui-icon mui-icon-search"></span>
	                <div class="mui-media-body">视频专区</div></a></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
	                <span class="mui-icon mui-icon-phone"></span>
	                <div class="mui-media-body">联系我们</div></a></li>
	        
	    </ul> 
	
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lunbotuList:[]//保存轮播图的数组
			}
		},
		created(){
			this.getLunbotu();
		},
		methods:{
			getLunbotu(){
				// this.$http.get('http://vue.studyit.io/api/getLunbo').then(result=>{
				// 	if(result.body.status===0){
				// 		this.lunbotuList=result.body.message;
				// 	}});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.mint-swipe{
	height:200px;
	 .mint-swipe-item{
		&:nth-child(1){
			background-color: #333;
		}
		&:nth-child(2){
			background-color: #678;
		}
		&:nth-child(3){
			background-color: #234;
		}
	 }
	 .ul{
	 	background-color:#fff;
	 }
	}	
	
</style>