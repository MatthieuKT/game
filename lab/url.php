<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>test url</title>
    <style media="screen">
      body {
        background-color: black;
      }
    </style>
  </head>
  <body>



    <script type="text/javascript">

      function getURL() {
        // Récupère l'URL
        var url_string = window.location.href;
        var url = new URL(url_string);
        // Récupère le paramètre de l'url concernant l'écran à cibler
        var keytofind = url.searchParams.get("c");
        console.log(keytofind);
      }

      function setURL(test) {
        var param = test;
        var stateObj =  {test : "test"};
        history.pushState(stateObj, "", param);
        console.log(param);
      }

      function replaceURL(test)  {
        var param = test;
        var stateObj =  {test : "test"};
        history.replaceState(stateObj, "", param);
      }

      setURL("?c=balcon.html");
      getURL();
      replaceURL("?c=salon.php");

    </script>

  </body>
</html>
