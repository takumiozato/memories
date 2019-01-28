// サムネイルのチップ画像
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.chips');
	var instances = M.Chips.init(elems);
});

// MagicGrid
if(document.getElementById("photo-grid")){
	let magicGrid = new MagicGrid({
		container: "#photo-grid",
		items: 6,
		gutter: 15,
		animate: false,
	});
	magicGrid.listen();
}

// Vue.js
var titleArea = {
	template: '#title-area',
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
	template: '#user-chip',
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
	template: '#photo-grid',
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
	template: '#detail-image',
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
	template: '#detail-content',
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
		'detail-image': detailImage,
		'detail-content': detailContent,
	}
})