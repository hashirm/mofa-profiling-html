$(function() {
  $("#price-range").slider({
        step: 500,
        range: true, 
        min: 0, 
        max: 20000, 
        values: [0, 20000], 
        slide: function(event, ui)
        {$("#priceRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  
  $("#priceRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));
  
});