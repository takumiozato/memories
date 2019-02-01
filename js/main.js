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
		content: '結婚式の開場前、空いた時間に立ち寄った、北谷のサンセットビーチ。この時、まだ4月なのに焼けるような暑さだった。北谷という土地は沖縄の中でも比較的外国人が多く、とくにこのサンセットビーチは、日光浴や、サイクリングをしている外国人を毎日見かける。リラックスした空気が流れる居心地の良いビーチ。',
		like: 12,
		comments: ['いいね！','良い天気ですね']
	},
	{
		id: 1,
		image: 'images/photo/1.jpg',
		title: '古宇利ビーチ',
		content: '沖縄県北部にある、古宇利島のビーチ。沖縄本島から車で行けるビーチの中で一番綺麗だと思う。絵具を流し込んだかのようなエメラルドグリーンの海が目の前に広がる。',
		like: 3,
		comments: ['恋の島！']
	},
	{
		id: 2,
		image: 'images/photo/2.jpg',
		title: 'ブセナの海中展望塔',
		content: '海底から伸びている展望塔。塔に入って階段を降りると、窓から海中の様子を見ることができる。サンゴ礁や熱帯魚がたくさん泳いでいて、カクレクマノミを目の前で見ることもできる。',
		like: 4,
		comments: ['かわいい','行ってみたい']
	},
	{
		id: 3,
		image: 'images/photo/3.jpg',
		title: 'フクギ並木',
		content: '台風や潮風から守ってくれる、フクギ。陽射しからも守ってくれて、涼しくて気持ちが良い。',
		like: 124,
		comments: ['おじーおばーの家のまわりこんな感じ','懐かしい気持ちになる']
	},
	{
		id: 4,
		image: 'images/photo/4.jpg',
		title: '家から見える景色',
		content: '線路が目の前にあって、朝から晩まで電車が走り続けているし、日当たりも良くないが、だんだん慣れてきて、今では結構好きな景色。天神祭の花火も見える。',
		like: 24,
		comments: ['良い天気ですね']
	},
	{
		id: 5,
		image: 'images/photo/5.jpg',
		title: '中ノ島',
		content: '',
		like: 5,
		comments: ['いいところですよね']
	},
	{
		id: 6,
		image: 'images/photo/6.jpg',
		title: '夜の大阪城',
		content: '意味もなく大阪城の近くに住むことにこだわったのだが、本当に満足している。大きな公園があるので散歩するのにもちょうど良く、夏はキャンプ用のチェアーを置いて本を読んだり眠ったりしていた。夜はライトアップされてて綺麗だし、ランナーがたくさんいて賑やか。',
		like: 12,
		comments: ['行ってみたい','外国人多いですよねぇ']
	},
	{
		id: 7,
		image: 'images/photo/7.jpg',
		title: '駅のホームにいた鳥',
		content: 'どこかの駅で電車を待っている時に現れた鳥。沖縄ではあまり見かけないけど、大阪ではやたらと見かける。なんだか上品で綺麗。',
		like: 34,
		comments: ['かわいい']
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
		<div class="mm-container">
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
				<a :class="'black-text'" @click="routerBack">
					<i class="small material-icons blue-grey-text text-darken-3">arrow_back</i>
				</a>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false
		}
	},
	methods: {
		routerBack: function(){
			router.go(-1)
		}
	},
	mounted: function(){
		this.isShow = true
	}
}

// 投稿画像
var detailImage = {
	props: ['data'],
	template: `
		<transition name="image-fade">
			<div class="detail-image-wrapper col m5 s12" v-show="isShow">
				<img :src="data.image" alt="投稿画像" class="detail-image z-depth-2">
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

// アクションボタン
var favButton = {
	props: ['data'],
	template: `
		<div class="fav-btn-wrapper">
			<span><i class="small material-icons like-icon" :class="isFavClass" @click="doFav">{{ isFavIcon }}</i>{{ data.like }}件</span>
			<span><i class="small material-icons blue-grey-text text-darken-3">chat_bubble_outline</i>{{ data.comments.length }}件</span>
			<i class="small material-icons" :class="isBookMarkClass" @click="doBookMark">{{ isBookMarkIcon }}</i>
		</div>
	`,
	data: function(){
		return {
			isShow: false,
			isFav: false,
			isBookMark: false,
		}
	},
	computed: {
		isFavIcon: function(){
			if (this.isFav) {
				return 'favorite'
			}else{
				return 'favorite_border'
			}
		},
		isFavClass: function(){
			if (this.isFav) {
				return 'red-text text-darken-1 like-anime'
			}else{
				return 'blue-grey-text text-darken-3'
			}
		},
		isBookMarkIcon: function(){
			if (this.isBookMark) {
				return 'bookmark'
			}else{
				return 'bookmark_border'
			}
		},
		isBookMarkClass: function(){
			if (this.isBookMark) {
				return 'yellow-text text-darken-3 like-anime'
			}else{
				return 'blue-grey-text text-darken-3'
			}
		},
	},
	methods: {
		doFav: function(){
			this.isFav = !this.isFav

			if (this.isFav) {
				this.data.like += 1
			}else {
				this.data.like -= 1
			}
		},
		doBookMark: function(){
			this.isBookMark = !this.isBookMark

			if (this.isBookMark) {
				M.toast({html: 'お気に入りに追加しました',classes: 'blue-grey darken-3', displayLength: '1500'})
			}
		}
	},
}

// 投稿のタイトル、テキスト
var detailContent = {
	props: ['data'],
	template: `
		<transition name="content-fade">
			<div class="detail-content col m6 s12" v-show="isShow">
				<h2 class="content-title">{{ data.title }}</h2>
				<p>{{ data.content }}</p>
				<fav-btn :data="data"></fav-btn>
				<div class="comment-wrapper">
					<div class="input-field comment-area">
						<textarea id="textarea1" class="materialize-textarea"></textarea>
						<label for="textarea1">コメント</label>
					</div>
					<div class="submit-area">
						<button class="btn waves-effect waves-light teal darken-3" type="submit" name="action">送信</button>
					</div>
				</div>
			</div>
		</transition>
	`,
	data: function(){
		return {
			isShow: false,
		}
	},
	components: {
		'fav-btn': favButton
	},
	mounted: function(){
		this.isShow = true
	}
}

// 詳細ページ
var detailPage = {
	template: `
		<div class="mm-container">
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

// ユーザーページ
var userPage = {
	template: `
		<div class="mm-container">
			<icon-wrapper></icon-wrapper>
			<div class="profile-wrapper">
				<div class="row">
					<div class="col s4 m4">
						<transition name="image-scale">
							<img src="images/user_icon.jpg" alt="ユーザー画像" class="user-image" v-show="isShow">
						</transition>
						<p class="user-name">Ozato Takumi</p>
					</div>
					<div class="col s8 m8">
						<p class="follow-btn-wrapper">
							<a class="waves-effect waves-light btn-small" :class="btnColor" @click="doFollow">{{ followText }}</a>
						</p>
						<div class="row user-status">
							<div class="col s6">
								<p>フォロワー</p>
								<p>5</p>
							</div>
							<div class="col s6">
								<p>投稿</p>
								<p>{{ photoData.length }}</p>
							</div>
						</div>
					</div>
					<div class="col s12 m12">
						<p class="user-profile grey-text text-darken-2">
							沖縄出身。大阪市内のWEB制作会社でプログラマーをしています。Vue.jsにハマって、WEB制作に活かそうと勉強中。休みの日は普通電車に乗ってあてもなく遠くに行きがち。本と音楽と猫が好き。
						</p>
					</div>
				</div>
			</div>
			<photo-grid :data="photoData"></photo-grid>
		</div>
	`,
	data: function(){
		return {
			isShow: false,
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
				return 'フォロー解除'
			}else{
				return 'フォロー'
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
	},
	mounted: function(){
		this.isShow = true
	}
}

var router = new VueRouter({
	routes: [
		{
			path: '/',
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