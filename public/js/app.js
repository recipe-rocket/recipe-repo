$('#openBtn').on('click', () => {
  $('#mySidenav').css('width', '250px');
});

$('#closebtn').on('click', () => {
  $('#mySidenav').css('width', '0px');
});

$('#deleteRecipe').on('click', () => {
  confirm("Confirm delete?");
});

