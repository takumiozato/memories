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

// Vue.js
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
				<div class="photo-item"><a href="detail.html"><img class="z-depth-2" src="images/photo/1.jpg" alt="イメージ画像"></a></div>
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

var iconWrapper = {
	template: `
		<transition name="icon-fade">
			<div class="icon-wrapper" v-show="isShow">
				<a href="index.html" class="black-text">
					<i class="mini material-icons">arrow_back</i>
				</a>
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
	template: `
		<transition name="image-fade">
			<div class="detail-image-wrapper col m6 s12" v-show="isShow">
				<img src="images/photo/1.jpg" alt="イメージ画像" class="detail-image z-depth-2">
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
	template: `
		<transition name="content-fade">
			<div class="detail-content col m6 s12" v-show="isShow">
				<h2 class="content-title">サンセットビーチ</h2>
				<p>結婚式の開場前、空いた時間に立ち寄った、北谷のサンセットビーチ。この時、まだ4月なのに焼けるような暑さだった。北谷という土地は沖縄の中でも比較的外国人が多く、とくにこのサンセットビーチは、日光浴や、サイクリングをしている外国人を毎日見かける。リラックスした空気が流れる居心地の良いビーチ。</p>
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

var vm = new Vue({
	el: "#app",
	components: {
		'title-area': titleArea,
		'user-chip': userChip,
		'photo-grid': photoGrid,
		'icon-wrapper': iconWrapper,
		'detail-image': detailImage,
		'detail-content': detailContent,
	},
})