$(document).ready(function(){
  $("#formOne").submit(function(event){

    var nameInput = $("input#name").val();
    var addressInput1 = $("input#address1").val();
    var addressInput2 = $("input#address2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();
    var itemInput = $("input:radio[name=item]:checked").val();

    $(".name").text(nameInput);
    $(".address1").text(addressInput1);
    $(".address2").text(addressInput2);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    $(".item").text(itemInput);

    $("#message").show();
    $("#formOne").hide();

    event.preventDefault();

  });
});
