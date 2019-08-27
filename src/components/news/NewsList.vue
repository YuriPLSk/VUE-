<template>
	<div>
	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media">
			<router-link to="/home/newsinfo">
				<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/49810195?s=40&v=4">
				<div class="mui-media-body">
					<h3>幸福</h3>
					<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
					<p class='mui-ellipsis' >发表时间：13：00 &nbsp&nbsp&nbsp 点击：1290</p>
				</div>
			</router-link>
		</li>
		<li class="mui-table-view-cell mui-media">
			<router-link to="/home/newsinfo">
				<img class="mui-media-object mui-pull-left" src="‪https://avatars3.githubusercontent.com/u/49810195?s=40&v=4">
				<div class="mui-media-body">
					<h3>木屋</h3>
					<p class='mui-ellipsis' style="float:left">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
					<p class='mui-ellipsis' style="float:right;margin-right:50px;">发表时间：13：00 &nbsp&nbsp&nbsp 点击：1290</p>
				</div>
			</router-link>
		</li>
		<li class="mui-table-view-cell mui-media">
			<router-link to="/home/newsinfo">
				<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/49810195?s=40&v=4">
				<div class="mui-media-body">
					<h3>CBD</h3>
					<p class='mui-ellipsis' style="float:left">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
					<p class='mui-ellipsis' style="float:right;margin-right:50px;">发表时间：13：00 &nbsp&nbsp&nbsp 点击：1290</p>
				</div>
			</router-link>
		</li>

	</ul>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.mui-table-view{
		li{
			h1{font-size:14px;}
			
		}
	}
	.mui-ellipsis{
				font-size:12px;
				color:#226aff;
				display:flex;
				flex-direction:row;
				justify-content:space-between;
			}
</style>