({
    // appDir: "./www",
    baseUrl: "./www",
    dir: "./dist/",
    paths: {
        "requireLib": "lib/require",
        "main": "app/main",
        'jquery': 'lib/jquery/jquery',
        'jquery.alpha': 'lib/jquery-plugins/jquery.alpha'
    },
    namespace: "foo",

    modules: [
        {
            name: "foo",
            include: ["requireLib"],
            create: true
        }
    ]
})