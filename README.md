# 95-KEYGEN-JS
A keygen rewritten to JavaScript for Doors 95 and every Macroshaft software in the period. [Live Demo](https://xproot.github.io/95-KEYGEN-JS/) - [Original Python Version](https://github.com/SashiDegodeshi/w95keygen-python) - [Thanks to this amazing source too](https://gurney.dev/posts/mod7/)

## Usage
`generateMsSerial(ver);`
Where ver can be "oem" or anything else (anything else will be interpreted as a retail serial).
once ran, it will return a serial.

## Quickly install it in your website
Download 95keygen.js from [here](https://raw.githubusercontent.com/xproot/95-KEYGEN-JS/main/95keygen.js) and add `<script src="95keygen.js"></script>` in a convienent place **or** you can skip downloading and uploading a js file by adding 
```<script src="https://xproot.neocities.org/projects/js/95keygen.js"></script>``` (only HTTPS though, not perfect) and after you've properly inserted the script make a quick function that takes the return value of generateMsSerial() or generateMsSerial('oem') and puts it somewhere

EXAMPLE
```
<script>
function generateSerial(version) {
 document.getElementById("serial").innerText = generateMsSerial(version);
}
</script>
```

... (and somewhere in your body) ...

```
<p id="serial"></p>
<button onClick="generateSerial()">get a retail serial!</button>
<button onClick="generateSerial('oem')">get a oem serial!</button>
<button onClick="generateSerial('11')">get a 11-digit serial!</button>
```

![image](https://user-images.githubusercontent.com/49620652/221368790-4ffd2e26-a579-4553-8eed-bb255602d7ae.png)![image](https://user-images.githubusercontent.com/49620652/221368807-146bf608-e95f-4a30-ab1f-ee0fdbbef2b3.png)![image](https://user-images.githubusercontent.com/49620652/221368814-ec8ae085-30e4-4665-b13d-801257ee29d2.png)





and you should have something like this _(I also recommend seeing the index.html as that works as an example website too.)_
