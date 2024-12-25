// Карточка товара
Ext.define('MyApp.view.ProductForm', {
    extend: 'Ext.window.Window',
    title: 'Карточка товара',
    modal: true,
    layout: 'fit',
    width: 400,
    height: 300,

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'form',
            bodyPadding: 10,
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Имя',
                name: 'name',
                readOnly: true,
                value: me.record.get('name')
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Цена',
                name: 'price',
                minValue: 0,
                value: me.record.get('price')
            }, {
                xtype: 'numberfield',
                fieldLabel: 'Кол-во',
                name: 'quantity',
                minValue: 0,
                value: me.record.get('quantity')
            }],
            buttons: [{
                text: 'Сохранить',
                handler: function(btn) {
                    var form = btn.up('form').getForm();
                    if (form.isDirty()) {
                        Ext.Msg.alert('Информация', 'Данные изменены.'); // Сообщение о изменениях
                    }
                }
            }, {
                text: 'Отмена',
                handler: function(btn) {
                    btn.up('window').close();
                }
            }]
        }];

        me.callParent(arguments);
    }
});