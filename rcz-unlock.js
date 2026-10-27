<script>
(function(){
  var TTL     = 86400000;   // rolexcoderz TOKEN_TTL
  var REFRESH = 72000000;   // re-grant at 20h
  var KEY     = 'pw_rcz_grant';
  var last    = +localStorage.getItem(KEY) || 0;
  if (Date.now() - last < REFRESH) return;

  var f = document.createElement('iframe');
  f.src = 'https://rolexcoderz.com/Check/access.html';
  f.setAttribute('aria-hidden','true');
  f.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;top:-9999px;border:0';
  f.onload = function(){
    localStorage.setItem(KEY, Date.now());
    setTimeout(function(){ f.remove(); }, 2000);
  };
  document.body.appendChild(f);
})();
</script>
