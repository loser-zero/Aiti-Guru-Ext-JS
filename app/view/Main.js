// Главное окно
Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    title: 'Главное окно',
    items: [],
    
    // Панель инструментов
    tbar: [{
        text: 'Товары',
        handler: function() {
            var tabPanel = this.up('tabpanel');
            // Проверяем, существует ли уже вкладка с товарами
            var productsTab = tabPanel.down('productsgrid');
            if (!productsTab) {
                productsTab = tabPanel.add({
                    title: 'Список товаров',
                    xtype: 'productsgrid'
                });
            }
            tabPanel.setActiveTab(productsTab);
        }
    }, {
        text: 'Выход',
        handler: function() {
            var win = Ext.create('MyApp.view.Login');
            win.show();
            this.up('tabpanel').close();
        }
    }],
    
    initComponent: function() {
        this.callParent(arguments);
    },
    
    renderTo: Ext.getBody()
});