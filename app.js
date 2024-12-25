Ext.application({
    name: 'MyApp',
    appFolder: 'app',

    views: [
        'Login',
        'Main',
        'ProductsGrid',
        'ProductForm'
    ],

    launch: function() {
        Ext.create('MyApp.view.Login').show();
    }
});