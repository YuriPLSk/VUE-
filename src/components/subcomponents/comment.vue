<template>
	<div class="cmt-container">
		<h3>评论区</h3>
		<hr>
		<textarea placeholder="请输入您要BB的内容(不多于120字)" maxlength="120"></textarea>
		<mt-button type="primary" size="large">发表评论</mt-button>
		<div class="cmt-list">
			<div class="cmt-item">
				<div class="cmt-title">
					第一楼&nbsp&nbsp用户：匿名用户&nbsp&nbsp发表时间2019-02-12  14:12:34
				</div>
				<div class="cmt-body">孙宇彤也太可爱了吧<img src="../../../images/我觉得不OK.jpg" alt="" width="100px" height="100px"></div>
			</div>
		</div>
		<div class="cmt-list">
			<div class="cmt-item">
				<div class="cmt-title">
					第一楼&nbsp&nbsp用户：匿名用户&nbsp&nbsp发表时间2019-02-12  14:12:34
				</div>
				<div class="cmt-body">孙宇彤也太可爱了吧<img src="../../../images/我觉得不OK.jpg" alt="" width="100px" height="100px"></div>
			</div>
		</div>
		
		<mt-button type="danger" size="large">加载更多</mt-button>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.cmt-container{
		h3{
			font-size:18px;
		}
		textarea{
			font-size: 14px;
			height: 85px;
			margin: 0px;
		}
		.cmt-list{
			margin: 6px 0;
		 	.cmt-item{
		 		font-size: 13px;
		 			.cmt-title{
						line-height: 30px;
						background-color: #ccc
		 			}
		 			.cmt-body{
						line-height: 35px;
						text-indent: 2em;//首行缩进
		 		}
		 	}	
		}
	}
</style>