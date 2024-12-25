Ext.define('MyApp.controller.MainController', {
    extend: 'Ext.app.Controller',

    views: ['Login', 'Main', 'ProductsGrid', 'ProductForm'],

    init: function() {
        this.control({
            'login button[action=login]': {
                click: this.login
            },
            'main button[action=logout]': {
                click: this.logout
            },
            'productsgrid': {
                itemclick: this.openProductForm
            }
        });
    },

    login: function(button) {
        var form = button.up('form').getForm();
        if (form.isValid()) {
            var values = form.getValues();
            if (values.username === 'admin' && values.password === 'padmin') {
                Ext.create('MyApp.view.Main');
                Ext.ComponentQuery.query('login')[0].close();
            } else {
                Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
            }
        }
    },

    logout: function() {
        Ext.create('MyApp.view.Login');
        Ext.ComponentQuery.query('main')[0].close();
    },

    openProductForm: function(grid, record) {
        Ext.create('MyApp.view.ProductForm', {
            record: record
        }).show();
    }
});