const inflate = require('./inflate.js');
inflate('{placeholder}').then((res) => {
    const script = document.createElement('script');
    script.innerHTML = res;
    document.body.appendChild(script);
});
