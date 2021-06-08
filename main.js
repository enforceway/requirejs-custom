requirejs.config({
    baseUrl: './',
    paths: {
        // 'requireLib': 'require',
        'jquery': 'lib/jquery/jquery',
        'jquery.alpha': 'lib/jquery-plugins/jquery.alpha'
    },
    shim: {
        'jquery.alpha': {
            deps: ['jquery'],
        },
        'jquery.beta': {
            deps: ['jquery']
        }
    },
});
requirejs(['jquery', 'jquery.alpha'], function( $ ) {
    debugger
    $(function() {
        $("#sampletitle").alpha();
    });
});