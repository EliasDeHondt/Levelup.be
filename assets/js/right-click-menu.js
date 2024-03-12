/*
 * Author Elias De Hondt
 * https://eliasdh.com
 */
/* Right Click Menu */
function hideMenu() {
    $('#contextMenu').hide();
    sessionStorage.removeItem('select');
}

$( document ).ready(function() {
    
    $( document ).contextmenu(function(e) {
      e.preventDefault();
      localStorage.setItem('select',document.getSelection());

      hideMenu();

      let menu = document.getElementById("contextMenu")
      menu.style.display = 'block';
      menu.style.left = e.pageX + "px";
      menu.style.top = e.pageY + "px";
    });

    $( document ).on('click', hideMenu);
});
/* Right Click Menu */

/* Copy Link Address */
function copylinkaddress() {
  navigator.clipboard.writeText(window.location.href);
}
/* Copy Link Address */

/* Copy To Clipboard */
function copytoclip() {
  navigator.clipboard.writeText(localStorage.getItem('select'));
}
/* Copy To Clipboard */