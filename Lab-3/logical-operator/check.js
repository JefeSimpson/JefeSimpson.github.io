if (-1 || 0) alert( 'first' ); // -1 is true then it shows
if (-1 && 0) alert( 'second' ); // it will not
if (null || -1 && 1) alert( 'third' ); // -1 && 1 gives 1, so null || 1 is 1 in result, so it shows