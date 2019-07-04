var menu = document.getElementById( 'burger-menu' );
var mobileNavigation = document.getElementsByClassName( 'mobile-navigation' )[ 0 ];
var mainContent = document.getElementsByClassName( 'main' )[ 0 ];
var removePadding = document.getElementsByClassName( 'wrapper' )[ 0 ];

menu.onclick = openMenu;

function openMenu( e ) {
  if ( mobileNavigation.style.display == 'block' ) {
    mobileNavigation.style.display = 'none';
    mainContent.style.display = 'block';
    // add padding back
    removePadding.style.paddingBottom = '40px';
  }
  else {
    mobileNavigation.style.display = 'block';
    mainContent.style.display = 'none';
    // remove padding for footer to hide when menu is open
    removePadding.style.paddingBottom = '0px';
  }
}
