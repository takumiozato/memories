// サムネイルのチップ画像
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.chips');
	var instances = M.Chips.init(elems);
});

// MagicGridの定義
let magicGrid = new MagicGrid({
	container: "#photo-grid",
	items: 6,
	gutter: 15,
	animate: false,
});
magicGrid.listen();