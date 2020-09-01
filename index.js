
var monthly1="$19.99";
var yearly1="$199.99";

var monthly2 ="$24.99"
var yearly2 ="$249.99"

var monthly3 ="$39.99"
var yearly3 ="$399.99"

$("label.switch input[type=checkbox]").change(function() {
    $(".price_month1").text(this.checked?yearly1:monthly1);
});

$("label.switch input[type=checkbox]").change(function() {
    $(".price_month2").text(this.checked?yearly2:monthly2);
});

$("label.switch input[type=checkbox]").change(function() {
    $(".price_month3").text(this.checked?yearly3:monthly3);
});
