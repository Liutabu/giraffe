import translate from 'translate-google-api';

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }

  const result = await translate(`I'm fine.`, {
    tld: "com",
    to: "lt",
  });
  document.getElementById("test-translate").innerHTML = result;
}
