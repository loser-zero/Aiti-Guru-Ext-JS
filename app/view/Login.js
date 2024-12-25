// Форма входа
Ext.define('MyApp.view.Login', {
    extend: 'Ext.window.Window',
    title: 'Вход',
    modal: true,
    layout: 'fit',
    width: 300,
    height: 200,

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'form',
            bodyPadding: 10,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'username',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Пароль',
                name: 'password',
                inputType: 'password',
                allowBlank: false
            }],
            buttons: [{
                text: 'Войти',
                handler: function() {
                    var form = this.up('form').getForm();
                    if (form.isValid()) {
                        var username = form.findField('username').getValue();
                        var password = form.findField('password').getValue();

                        // Проверка логина и пароля
                        if (username === 'admin' && password === 'padmin') {
                            me.close();
                            Ext.create('MyApp.view.Main').show(); // Открываем главное окно
                        } else {
                            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль.');
                        }
                    }
                }
            }]
        }];

        me.callParent(arguments);
    }
});