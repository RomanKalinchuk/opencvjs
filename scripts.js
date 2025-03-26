const iframe = document.getElementById('iframe').contentWindow
var color = 'Black'

function buttonPress(button){

    color = button.innerHTML
    iframe.setColor()

}
