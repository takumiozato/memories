// サムネイルのチップ画像
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.chips');
	var instances = M.Chips.init(elems);
});

// MagicGridの定義
let magicGrid = new MagicGrid({
	container: "#photo-grid",
	items: 6,
	// maxColumns: 3,
	animate: true,
});
magicGrid.listen();