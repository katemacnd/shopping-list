
function clickSubmit() {
        let submitButton=$('button').first();
        submitButton.on('click', function(event) {
            event.preventDefault();
            let entry=document.getElementById('shopping-list-entry').value;
            $(".shopping-list").append(`
                <li>
                <span class="shopping-item">` + entry + ` </span>
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                  <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                  <span class="button-label">delete</span>
                  </button>
                </div>
                </li>`);
            document.getElementById("js-shopping-list-form").reset()
        });
}

function clickCheck() {
  $('.shopping-item-toggle').on('click', function(event) {
          event.preventDefault();
          let crossout = $(this).closest('li').find('.shopping-item')
          console.log(crossout);
          crossout.toggleClass('shopping-item__checked');
          console.log('clicked check!')
        });
}

function clickDelete() {
  $('.shopping-item-delete').on('click', function(event) {
          event.preventDefault();
          $(this).parents('li').remove()
        });
}






// function calls


    $(clickSubmit);
    $(clickCheck);
    $(clickDelete);
