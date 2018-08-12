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
