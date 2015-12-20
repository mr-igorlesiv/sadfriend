// function  appendFriendToList(val) {
//     $('#list').append("<li><span>" + val + "</span><a href='#' class='cancel-btn'> - Delete</a></li>");
// }


// if (localStorage['friends']) {
//     var friends = JSON.parse(localStorage['friends']);
// }else {
//     var friends = [];
// }

// for(var i=0;i<friends.length;i++) {
//      appendFriendToList(friends[i]['name']);
// }

// var addFriend = function(){
//     // get value from #name input
//     var val = $('#name').val();
    
//     // add the task to the array
//     friends.push({'name': val, 'status': 0});
//     friends.reverse();
    
//     // save to local storage
//     localStorage["friends"] = JSON.stringify(friends);
    
//     // append the name to the list
//      appendFriendToList(val);
    
//     // reset the input field and focus it.
//     $('#name').val("").focus();
// }

// $('#add-btn').click(addFriend);

// $('#name').keyup(function(e){
//     if (e.keyCode === 13) {
//         addFriend();
//     }
// });

// //Delete from Array
// $('.cancel-btn').live( 'click', function() {
//    var currentFriend = $(this).parent('li').children('span').css("color", "green").text();
//    for(var i = 0; i<friends.length; i++) {
//     if(currentFriend === friends[i]['name']) {
//       friends.splice(i, 1);
//       $(this).parent('li').hide(5);
//       localStorage["friends"] = JSON.stringify(friends);
//     }
// }
   
// });

// for(var i = 0; i<3; i++){
//   var rand = Math.floor(Math.random() * friends.length);
//   if(friends[rand]['status'] == 0){
//     $('.writeTodayWrap').append( "<li>" + friends[rand]['name'] + "</li>");
//   }
// }

// //Set status 1.
// $('.writeTodayWrap li').click(function() {
//   var currentFriend =  $(this).text();
//   for(var i = 0; i<friends.length; i++) {
//    if(currentFriend === friends[i]['name']) {
//      friends[i]['status'] = 1;
//      $(this).hide(5);
//      localStorage["friends"] = JSON.stringify(friends);
//     }
//    }

// });