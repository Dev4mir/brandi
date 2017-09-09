
$("document").ready(function(){

  /** Smoth Scroll on select **/

  $('a[href*="#"]:not([href="#"])').click(function(event) {
    scrollToSection(this);
    event.preventDefault();
  });
  scrollToSection = (self) => {
    var href = $(self).attr('href');

    var targetPos = $(href).offset().top;

    $('html, body').animate({
      scrollTop: targetPos
    }, 1000);
  };

  /** Select dropdwon list **/
  var arr = ["Apple", "Apricots", "Banana" , "Mango", "Orange", "Peaches", "Raspberries"];
  var selectElm = $("#select-fruit");
  var btn = $("#submit-fruit");
  var selectedFruit = $("#selected-fruit");

  for(let i = 0; i < arr.length; i++){
    var opt = document.createElement("option")
    var opts = arr[i];
    opt.append(document.createTextNode(opts));
    selectElm.append(opt);
  }

  btn.click(function(){
    var userSelect = $("#select-fruit option:selected").text();
    if(selectElm.val() == "0" ){
      selectedFruit.text("...")
      return 0;
    }
    selectedFruit.text(userSelect);
  })

})
