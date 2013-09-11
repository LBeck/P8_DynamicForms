$(document).ready(function() {
  // The $.trim() function removes all newlines,
  // spaces (including non-breaking spaces),
  // and tabs from the beginning and end of
  // the supplied string.
  var todoTemplate = $.trim($('#todo_template').html());

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }


  //Create functions to add, remove and complete todos
  var add = function(name){
    var input = $('.todo').val();
    var todo = buildTodo(input);
    return $('.todo_list').append(todo);
  }

  var deleteToDo = function() {
     var $todo = $(todoTemplate);
     // $('.todo_list').children().remove();
     $('.todo').children().first().remove();
     console.log($(this).parent());
  }

  var complete = function() {
    $('.todo').addClass("complete");
  }

// Bind functions which add, remove, and complete todos to the appropriate
// elements
  function bindEvents() {

    $('#todo').on('click','.add', add );
    $('.todo_list').on('click', '.delete', deleteToDo);
    $('.todo_list').on('click', '.complete', complete);
  }

  bindEvents();

});
