//test --> $("p").css("color", "red"); starts off at length 5
var data = [{
    id: 1,
    title: 'Time',
    body: 'Time you enjoy wasting, was not wasted.',
    author: 'John Lennon'
  },
  {
    id: 2,
    title: 'Pain',
    body: 'If you are pained by any external thing, it is not this thing that disturbs you, but your own judgemeny about it. And it is in your power to wipe out this judgement now.',
    author: 'Marcus Aurelius'
  },
  {
    id: 3,
    title: 'Words',
    body: 'Some people just have a way with words, and other people ... oh ... not have way.',
    author: 'Steve Martin'
  },
  {
    id: 4,
    title: 'Peace',
    body: "If everyone demanded peace instead of another television set, then there'd be peace.",
    author: "John Lennon"
  },
  {
    id: 5,
    title: 'Art',
    body: 'Art is the imposing of a pattern on experience, and our aesthetic enjoyment is recognition of teh pattern.',
    author: 'Alfred North Whitehead'
  }
];

var $nav = $('#nav-container');
var $intro = $('#intro');
var $posts = $('#post-container');
var $side = $('#sidebar');

function initPosts() {
  for (var i = 0; i < data.length; i++) {
    //create elements
    var postId = 'post-' + data[i].id;
    $post = $('<section class="post"></section');
    $title = $('<h2 class="title"></h2>');
    //same identifier for 2 vars??
    $body = $('<p class="quote"></p>');
    $body = $('<blockquote></blockquote');
    $author = $('<span class="author"></span>');
    $navItem = $('<li></li>');
    //add post data
    $title.text(data[i].title);
    $body.text(data[i].body);
    $author.text(data[i].author);

    //add nav item data
    $navItem.attr('id', data[i].id);
    $navItem.text(data[i].title);

    //Combine post elements
    $post.attr('id', postId);
    $post.append($title);
    $post.append($body);
    $post.append($author);

    //Add post and nav elements to page.
    $posts.append($post);
    $nav.append($navItem);

    //Wire up nav item click event
    $navItem.on('click', function() {
      var id = $(this).attr('id');
      $posts.children().hide();
      $posts.find('#post-' + id).fadeIn();
    });

    $posts.children('.post').hide();
    $intro.fadeIn(1000);
  }


  //create and append modal button to sidebar...
  $addQuote = $('<div id="addQuote">+ Add</div>');
  $side.append($addQuote);

  //test

}

initPosts();