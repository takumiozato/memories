// サムネイルのチップ画像
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.chips');
	var instances = M.Chips.init(elems);
});

// ページ読み込み完了後に実行
window.onload = function () {
	// MagicGrid
	if(document.getElementById("photo-grid")){
		var magicGrid = new MagicGrid({
			container: "#photo-grid",
			items: photoData.length,
			gutter: 15,
			animate: false,
		});
		magicGrid.listen();
	}
};

var photoData = [
	{
		id: 0,
		image: 'images/photo/0.jpg',
		title: 'サンセットビーチ',
		content: '結婚式の開場前、空いた時間に立ち寄った、北谷のサンセットビーチ。この時、まだ4月なのに焼けるような暑さだった。北谷という土地は沖縄の中でも比較的外国人が多く、とくにこのサンセットビーチは、日光浴や、サイクリングをしている外国人を毎日見かける。リラックスした空気が流れる居心地の良いビーチ。'
	},
	{
		id: 1,
		image: 'images/photo/1.jpg',
		title: '古宇利ビーチ',
		content: '沖縄県北部にある、古宇利島のビーチ。沖縄本島から車で行けるビーチの中で一番綺麗だと思う。絵具を流し込んだかのようなエメラルドグリーンの海が目の前に広がる。'
	},
	{
		id: 2,
		image: 'images/photo/2.jpg',
		title: 'ブセナの海中展望塔',
		content: '海底から伸びている展望塔。塔に入って階段を降りると、窓から海中の様子を見ることができる。サンゴ礁や熱帯魚がたくさん泳いでいて、カクレクマノミを目の前で見ることもできる。'
	},
	{
		id: 3,
		image: 'images/photo/3.jpg',
		title: 'フクギ並木',
		content: '台風や潮風から守ってくれる、フクギ。陽射しからも守ってくれて、涼しくて気持ちが良い。'
	},
	{
		id: 4,
		image: 'images/photo/4.jpg',
		title: '家から見える景色',
		content: '線路が目の前にあって、朝から晩まで電車が走り続けているし、日当たりも良くないが、だんだん慣れてきて、今では結構好きな景色。天神祭の花火も見える。'
	},
	{
		id: 5,
		image: 'images/photo/5.jpg',
		title: '中ノ島',
		content: ''
	},
	{
		id: 6,
		image: 'images/photo/6.jpg',
		title: '夜の大阪城',
		content: '意味もなく大阪城の近くに住むことにこだわったのだが、本当に満足している。大きな公園があるので散歩するのにもちょうど良く、夏はキャンプ用のチェアーを置いて本を読んだり眠ったりしていた。夜はライトアップされてて綺麗だし、ランナーがたくさんいて賑やか。'
	},
	{
		id: 7,
		image: 'images/photo/7.jpg',
		title: '駅のホームにいた鳥',
		content: 'どこかの駅で電車を待っている時に現れた鳥。沖縄ではあまり見かけないけど、大阪ではやたらと見かける。なんだか上品で綺麗。'
	},
]

// トップページ
var titleArea = {
	template: `
		<transition name="title-fade">
			<div class="icon-wrapper" v-show="isShow">
				<h1 class="title">Memories</h1>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

var userChip = {
	template: `
		<transition name="chip-fade">
			<div class="chip-wrapper" v-show="isShow">
				<router-link to="/user/1">
					<div class="chip z-depth-1">
						<img src="images/user_icon.jpg" alt="ユーザーアイコン画像">
						Ozato Takumi
					</div>
				</router-link>
				<p class="fav-icon">
					<transition name="chip-fade">
						<i class="mini material-icons red-text text-accent-3" @click="doFav">{{ isFavIcon }}</i>
					</transition>
				</p>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false,
			isFav: false
		}
	},
	computed: {
		isFavIcon: function(){
			if (this.isFav) {
				return 'favorite'
			}else{
				return 'favorite_border'
			}
		}
	},
	methods: {
		doFav: function(){
			this.isFav = !this.isFav
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

var photoGrid = {
	props: ['data'],
	template: `
		<transition name="photo-fade">
			<div id="photo-grid" v-show="isShow">
				<div class="photo-item" v-for="photo in data">
					<router-link :to="'/detail/' + photo.id">
						<img class="z-depth-2" :src="photo.image" alt="イメージ画像">
					</router-link>
				</div>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false,
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

var indexPage = {
	template: `
		<div class="container">
			<title-area></title-area>
			<photo-grid :data="photoData"></photo-grid>
		</div>
	`,
	data: function(){
		return {
			photoData: photoData
		}
	},
	components: {
		'title-area': titleArea,
		'user-chip': userChip,
		'photo-grid': photoGrid
	}
}

// 詳細ページ
var iconWrapper = {
	template: `
		<transition name="icon-fade">
			<div class="icon-wrapper" v-show="isShow">
				<router-link to="/top" :class="'black-text'">
					<i class="mini material-icons">arrow_back</i>
				</router-link>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

var detailImage = {
	props: ['data'],
	template: `
		<transition name="image-fade">
			<div class="detail-image-wrapper col m6 s12" v-show="isShow">
				<img :src="data.image" alt="イメージ画像" class="detail-image z-depth-2">
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

var detailContent = {
	props: ['data'],
	template: `
		<transition name="content-fade">
			<div class="detail-content col m6 s12" v-show="isShow">
				<h2 class="content-title">{{ data.title }}</h2>
				<p>{{ data.content }}</p>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false,
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

var detailPage = {
	template: `
		<div class="container">
			<icon-wrapper></icon-wrapper>
			<user-chip></user-chip>
			<div class="row">
				<detail-image :data="photoData[paramsId]"></detail-image>
				<detail-content :data="photoData[paramsId]"></detail-content>
			</div>
		</div>
	`,
	data: function(){
		return {
			photoData: photoData
		}
	},
	computed: {
		paramsId: function(){
			return this.$route.params.id
		}
	},
	components: {
		'icon-wrapper': iconWrapper,
		'detail-image': detailImage,
		'user-chip': userChip,
		'detail-content': detailContent,
	}
}

var userPage = {
	template: `
		<div class="container">
			<icon-wrapper></icon-wrapper>
			<div class="profile-wrapper row">
				<div class="col s12 m4">
					<div class="row">
						<div class="col s6 m12">
							<img src="images/user_icon.jpg" alt="" class="user-image">
						</div>
						<div class="col s6 m12">
							<p class="user-name teal-text text-darken-3">Ozato Takumi</p>
							<p class="fav-btn-wrapper">
								<a class="waves-effect waves-light btn-small" :class="btnColor" @click="doFollow">{{ followText }}</a>
							</p>
						</div>
					</div>
				</div>
				<div class="col s12 m8">
					<div class="row">
						<div class="col s6">
							<small>Follower</small>
							<p>5</p>
						</div>
						<div class="col s6">
							<small>Posts</small>
							<p>8</p>
						</div>
					</div>
				</div>
			</div>
			<photo-grid :data="photoData"></photo-grid>
		</div>
	`,
	data: function(){
		return {
			isFollow: false,
			photoData: photoData
		}
	},
	methods: {
		doFollow: function(){
			this.isFollow = !this.isFollow
		}
	},
	computed: {
		followText: function(){
			if (this.isFollow) {
				return 'unfollow'
			}else{
				return 'follow'
			}
		},
		btnColor: function(){
			if (this.isFollow) {
				return 'blue-grey darken-1'
			}else{
				return 'teal darken-3'
			}
		}
	},
	components: {
		'icon-wrapper': iconWrapper,
		'user-chip': userChip,
		'photo-grid': photoGrid,
	}
}

var router = new VueRouter({
	routes: [
		{
			path: '/top',
			component: indexPage
		},
		{
			path: '/detail/:id',
			component: detailPage
		},
		{
			path: '/user/:id',
			component: userPage
		}
	]
})

// Vueインスタンス生成
var vm = new Vue({
	el: "#app",
	router: router,
	updated: function(){
		this.magicGridListen();
	},
	components: {
		'title-area': titleArea,
	},
	methods: {
		magicGridListen(){
			if(document.getElementById("photo-grid")){
				var magicGrid = new MagicGrid({
					container: "#photo-grid",
					items: photoData.length,
					gutter: 15,
					animate: false,
				});
				magicGrid.listen();
			}
		}
	}
})