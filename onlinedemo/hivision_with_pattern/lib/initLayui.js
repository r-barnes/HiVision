layui.use(["layer","form","upload"],function(a){initLayui()});var deepCopy=function(a){var c={},b;for(b in a)c[b]="object"===typeof a[b]?deepCopy(a[b]):a[b];return c};