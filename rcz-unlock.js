```html
<script>
(function () {
  'use strict';

  var REFRESH = 20 * 60 * 60 * 1000; // 20 hours
  var KEY = 'pw_rcz_grant';

  function runAccessCheck() {
    var last = 0;

    try {
      last = Number(localStorage.getItem(KEY)) || 0;
    } catch (e) {
      console.warn('Local storage is unavailable.');
      return;
    }

    if (Date.now() - last < REFRESH) {
      return;
    }

    var frame = document.createElement('iframe');

    frame.src = 'https://rolexcoderz.com/Check/access.html';
    frame.title = 'Access check';
    frame.setAttribute('aria-hidden', 'true');
    frame.tabIndex = -1;

    frame.style.cssText =
      'position:absolute;width:1px;height:1px;' +
      'left:-9999px;top:-9999px;border:0';

    frame.onload = function () {
      // This records that the iframe loaded, not that
      // the remote access check necessarily succeeded.
      try {
        localStorage.setItem(KEY, String(Date.now()));
      } catch (e) {
        console.warn('Unable to save the access-check timestamp.');
      }

      setTimeout(function () {
        frame.remove();
      }, 2000);
    };

    frame.onerror = function () {
      frame.remove();
      console.error('The access-check iframe failed to load.');
    };

    (document.body || document.documentElement).appendChild(frame);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAccessCheck, {
      once: true
    });
  } else {
    runAccessCheck();
  }
})();
</script>
```
