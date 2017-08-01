
$(".box .fazerPrevisao").click(function(){
	$(this).closest(".box").toggleClass("open");
});

$(".box .fazerAcerto").click(function(){
	$(this).closest(".box").toggleClass("open");
});

$(".verDadosModelo").click(function(){
	$(this).closest(".box.open").find(".dadosModelo").addClass("open");
});

$(".dadosModelo .close").click(function(){
	$(this).parent().parent().removeClass("open");
});

$('.grid-box').masonry({
// options
	itemSelector: '.box',
	columnWidth: 300,
	gutter: 30
});


$(".verAnalisesAnteriores").click(function(){
	$(this).closest(".box").find(".analiseAnterior").toggleClass("open");
	$(this).toggleClass("active");
});