function loadCSS( href, media ){
  link = document.createElement( "link" );
  link.href = href;
  link.type = "text/css";
  link.rel = "stylesheet";
  link.media = "only x";

  document.getElementsByTagName( "head" )[0].appendChild( link );

  var sheets = window.document.styleSheets;

  // This function sets the link's media back to `all` so that the stylesheet applies once it loads
  // It is designed to poll until document.styleSheets includes the new sheet.
  function toggleMedia(){
      var defined;
      for( var i = 0; i < sheets.length; i++ ){
        if( sheets[ i ].href && sheets[ i ].href.indexOf( href ) > -1 ){
          defined = true;
        }
      }
      if( defined ){
        link.media = media || "all";
      }
      else {
        setTimeout( toggleMedia );
      }
    }
    toggleMedia();
}