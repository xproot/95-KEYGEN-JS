# 95-KEYGEN-JS
A JavaScript keygen for Doors 95 and every Macroshaft software in the period.

## Usage
generateMsSerial(ver);
Where ver can be "oem" or anything else (anything else will be interpreted as a retail serial).
once ran, it will return a serial.

## Quickly install it in your website
Download 95keygen.js from [here](https://raw.githubusercontent.com/xproot/95-KEYGEN-JS/main/95keygen.js) and add `<script src="95keygen.js"></script>` in a convienent place then make a quick function that takes the return value of generateMsSerial() or generateMsSerial('oem') and puts it somewhere

EXAMPLE
```
<script>
function generateSerial() {
 document.getElementById("serial").innerText = generateMsSerial();
}
</script>
```
... (somewhere in your body) ...
```
<p id="serial"></p><button onClick="generateSerial()">get a retail serial!</button>
```
and you should have something like this
![image](https://user-images.githubusercontent.com/49620652/144756899-bd6f1d1f-0afe-4309-bddc-80ad61861fd0.png)
