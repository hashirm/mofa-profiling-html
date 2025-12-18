$(document).ready(function () {
  $('#country-select').select2({
    templateResult: formatCountry,
    templateSelection: formatCountry
  });

  // Function to format the dropdown options
  function formatCountry(country) {
    if (!country.id) return country.text; // No image for the placeholder

    // Get the image URL from the data attribute
    const imageUrl = $(country.element).data('image');
    // Create the HTML structure with the image and text
    return $('<span><img src="' + imageUrl + '" class="flag-icon" /> ' + country.text + '</span>');
  }

});

$(".notification .notification-bill").on('click', function () {
   $(this).toggleClass('active');
    $(".notification .notification-box").toggleClass("active");

})

$(document).ready(function () {
  $('#history-select').select2({
    templateResult: formatCountry,
    templateSelection: formatCountry,
    minimumResultsForSearch: Infinity, // Disables the search box
  });

  // Function to format the dropdown options
  function formatCountry(country) {
    if (!country.id) return country.text; // No image for the placeholder

    // Get the image URL from the data attribute
    const imageUrl = $(country.element).data('image');

    // Create the HTML structure with the image and text
    return $('<span><img src="' + imageUrl + '" class="flag-icon-history" /> ' + country.text + '</span>');
  }

});

$(document).ready(function () {
  $('#two-line-select').select2({
    templateResult: formatOption,    // Format each dropdown item
    templateSelection: formatOption,  // Format the selected item
    minimumResultsForSearch: Infinity
  });

  $('#barChart-select').select2({
    templateResult: formatOption,
    templateSelection: formatOption,
    minimumResultsForSearch: Infinity, // Disables the search box
});
$('#chooseCountry').select2({
    templateResult: formatOption,
    templateSelection: formatOption,
    minimumResultsForSearch: Infinity, // Disables the search box
});
$('#chooseState').select2({
    templateResult: formatOption,
    templateSelection: formatOption,
    minimumResultsForSearch: Infinity, // Disables the search box
});

  // Function to format the dropdown options
  function formatOption(option) {
    if (!option.id) return option.text; // Skip if placeholder

    // Access the data attribute for the subtext
    const subtext = $(option.element).data('subtext');

    // Create the HTML structure with two lines
    const $template = $(
      `<div style="display: flex; flex-direction: column;">
           <span>${option.text}</span>
           <span style="font-size: 14px;font-weight:300;">${subtext}</span>
         </div>`
    );
    return $template;
  }
});

$(".userIcon").on('click', function () {
  $(".userright-box").toggleClass("d-none");
})


let isToggled = true;

$(".password-label .showpassword-icon").click(function () {

  if (isToggled) {

    $('.password-textbox').attr("type", "text");
    isToggled = false
  } else {
    $('.password-textbox').attr("type", "password");
    isToggled = true;
  }

});



$(document).on("click", ".checkbox-wrapper input[type='checkbox']", function () {
      // Uncheck all checkboxes except the one clicked
      $( ".checkbox-wrapper input[type='checkbox']" ). not (this). prop ( 'checked' , false);
      // Reset styles for all labels except the one clicked
      $( ".checkbox-wrapper label" ).css ( "backgroundColor" , "white" );
      $( ".checkbox-wrapper label" ).css ( "color" , "rgb(27, 32, 36)" );
      // Set the style for the current label
      if($(this).is (':checked')) { 

        // $(this).css ("backgroundColor", "black");
        // $(this).css ("color", "white");

        $(this).parent("label").css( "backgroundColor", "blue" );
        $(this).parent("label").css("color","white");
      
      }
    });

// console.log($(".checkbox-wrapper input[type='checkbox']"))

// $(".checkbox-wrapper input[type='checkbox']").click(function(){
//   $(".checkbox-wrapper input[type='checkbox']").not(this).prop('checked', false);
// })

// $(".checkbox-wrapper label").click(function(){

//   $(".checkbox-wrapper label").not(this).css("backgroundColor","white");
//   $(".checkbox-wrapper label").not(this).css("color","rgb(27, 32, 36)");

// })


$(function () {
   $('#lineChart-select').select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        //templateSelection: formatOption,  // Format the selected item
        minimumResultsForSearch: Infinity
    });
    // Function to format the dropdown options
    function formatCountry(country) {
        if (!country.id) return country.text; // No image for the placeholder
        // Get the image URL from the data attribute
        const imageUrl = $(country.element).data('image');
        // Create the HTML structure with the image and text
        return $('<span><img src="' + imageUrl + '" class="flag-icon-history" /> ' + country.text + '</span>');
    }
    $('#barChart-select').select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        minimumResultsForSearch: Infinity, // Disables the search box
    });
    $('#chooseCountry').select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        minimumResultsForSearch: Infinity, // Disables the search box
    });
    $('#chooseState').select2({
        templateResult: formatCountry,
        templateSelection: formatCountry,
        minimumResultsForSearch: Infinity, // Disables the search box
    });
    // Function to format the dropdown options
    function formatCountry(country) {
        if (!country.id) return country.text; // No image for the placeholder
        // Get the image URL from the data attribute
        const imageUrl = $(country.element).data('image');
        // Create the HTML structure with the image and text
        return $('<span><img src="' + imageUrl + '" class="flag-icon-history" /> ' + country.text + '</span>');
    }
})

setTimeout(() => {
    return;
    progressJs.update('progress-js-1', 75);
    setTimeout(() => {
        progressJs.update('progress-js-1', 0);
    }, 3000);
    setTimeout(() => {
        progressJs.update('progress-js-2', 0);
    }, 3000);
    setTimeout(() => {
        progressJs.update('progress-js-3', 0);
    }, 3000);
}, 3000);
 
