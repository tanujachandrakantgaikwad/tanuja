<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(document).ready(function()
{
  $("#aa").click(function()
  {
    $("#bb").fadeOut(6000);
  });
  $("#aaa").click(function()
  {
    $("#bb").fadeIn(6000);
  });

});
</script>
</head>
<body>
   <h1 id="bb"> Example of class Selector</h1>
<h1 id="aa">hide kara</h1>
<h1 id="aaa">show kara</h1>

</body>
</html>