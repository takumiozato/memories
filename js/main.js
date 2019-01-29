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
			items: 6,
			gutter: 15,
			animate: false,
		});
		magicGrid.listen();
	}
};

var photoData = [
	{
		id: 0,
		title: 'サンセットビーチ',
		content: '結婚式の開場前、空いた時間に立ち寄った、北谷のサンセットビーチ。この時、まだ4月なのに焼けるような暑さだった。北谷という土地は沖縄の中でも比較的外国人が多く、とくにこのサンセットビーチは、日光浴や、サイクリングをしている外国人を毎日見かける。リラックスした空気が流れる居心地の良いビーチ。'
	},
	{
		id: 1,
		title: '古宇利ビーチ',
		content: '沖縄県北部にある、古宇利島のビーチ。沖縄本島から車で行けるビーチの中で個人的に一番綺麗。絵具を流し込んだかのような信じられないほどのエメラルドグリーンに息をのむ。'
	},
]

// トップページ
var titleArea = {
	template: `
		<transition name="title-fade">
			<div class="title-area" v-show="isShow">
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
				<div class="chip z-depth-1">
					<img src="images/user_icon.jpg" alt="ユーザーアイコン画像">
					Ozato Takumi
				</div>
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

var photoGrid = {
	template: `
		<transition name="photo-fade">
			<div id="photo-grid" v-show="isShow">
				<div class="photo-item"><router-link to="/detail"><img class="z-depth-2" src="images/photo/1.jpg" alt="イメージ画像"></router-link></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/2.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/3.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/4.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/5.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/6.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/7.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/8.jpg" alt="イメージ画像"></div>
				<div class="photo-item"><img class="z-depth-2" src="images/photo/9.jpg" alt="イメージ画像"></div>
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

var indexPage = {
	template: `
		<div>
			<title-area></title-area>
			<user-chip></user-chip>
			<photo-grid></photo-grid>
		</div>
	`,
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
	props: ['id'],
	template: `
		<transition name="image-fade">
			<div class="detail-image-wrapper col m6 s12" v-show="isShow">
				<img :src="'images/photo/' + id + '.jpg'" alt="イメージ画像" class="detail-image z-depth-2">
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
		<div>
			<title-area></title-area>
			<icon-wrapper></icon-wrapper>
			<div class="row">
				<detail-image :id="paramsId"></detail-image>
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
		'title-area': titleArea,
		'icon-wrapper': iconWrapper,
		'detail-image': detailImage,
		'detail-content': detailContent,
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
		}
	]
})

// Vueインスタンス生成
var vm = new Vue({
	el: "#app",
	router: router,
	watch: {
		// ルートが変更されたらこのメソッドを再び呼び出します
		'$route': 'magicGridListen'
	},
	updated: function(){
		this.magicGridListen();
	},
	methods: {
		magicGridListen(){
			if(document.getElementById("photo-grid")){
				var magicGrid = new MagicGrid({
					container: "#photo-grid",
					items: 6,
					gutter: 15,
					animate: false,
				});
				magicGrid.listen();
			}
		}
	}
})