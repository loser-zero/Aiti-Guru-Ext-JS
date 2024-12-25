Ext.application({
    name: 'MyApp',

    appFolder: 'app',

    controllers: [
        'MainController'
    ],

    models: [
        'Product'
    ],

    stores: [
        'Products'
    ],

    views: [
        'Login',
        'Main',
        'ProductsGrid',
        'ProductForm'
    ],

    // Запуск приложения
    launch: function() {
        Ext.create('MyApp.view.Login');
    }
});