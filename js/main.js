// サムネイルのチップ画像
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.chips');
	var instances = M.Chips.init(elems);
});

// MagicGrid
let magicGrid = new MagicGrid({
	container: "#photo-grid",
	items: 6,
	gutter: 15,
	animate: false,
});
magicGrid.listen();

// Vue.js
var userChip = {
	template: '#user-chip'
}

var photoGrid = {
	template: '#photo-grid'
}


var vm = new Vue({
	el: "#app",
	components: {
		'user-chip': userChip,
		'photo-grid': photoGrid
	}
})