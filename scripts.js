const iframe = document.getElementById('iframe').contentWindow
var color = 'Black'

function buttonPress(button){

    iframe.setColor(button.innerHTML)

}
