// Таблица товаров
Ext.define('MyApp.view.ProductsGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.productsgrid',
    
    title: 'Товары',
    store: {
        fields: ['id', 'name', 'description', 'price', 'quantity'],
        data: [
            { id: 1, name: 'Товар 1', description: 'Описание 1', price: 10.5, quantity: 5 },
            { id: 2, name: 'Товар 2', description: 'Описание 2', price: 20.0, quantity: 0 }
        ]
    },
    columns: [{
        text: 'ID',
        dataIndex: 'id'
    }, {
        text: 'Имя',
        dataIndex: 'name',
        renderer: function(value) {
            return '<a href="#" class="product-link">' + value + '</a>';
        }
    }, {
        text: 'Описание',
        dataIndex: 'description'
    }, {
        text: 'Цена',
        dataIndex: 'price'
    }, {
        text: 'Кол-во',
        dataIndex: 'quantity',
        renderer: function(value) {
            return value === 0 ? '<span style="color:red;">' + value + '</span>' : value;
        }
    }],
    tbar: [{
        xtype: 'textfield',
        emptyText: 'Фильтр по ID',
        listeners: {
            specialkey: function(field, e) {
                if (e.getKey() === Ext.EventObject.ENTER) {
                    var grid = field.up('grid'),
                        store = grid.getStore(),
                        value = field.getValue();
                    store.clearFilter();
                    store.filter('id', value);
                }
            }
        }
    }, {
        xtype: 'textfield',
        emptyText: 'Фильтр по описанию',
        listeners: {
            specialkey: function(field, e) {
                if (e.getKey() === Ext.EventObject.ENTER) {
                    var grid = field.up('grid'),
                        store = grid.getStore(),
                        value = field.getValue();
                    store.clearFilter();
                    store.filter('description', value);
                }
            }
        }
    }],
    initComponent: function() {
        this.callParent(arguments);
        this.on('itemclick', this.onItemClick, this);
    },

    onItemClick: function(view, record) {
        // Создаем и отображаем форму карточки товара
        var productForm = Ext.create('MyApp.view.ProductForm', {
            title: 'Карточка товара: ' + record.get('name'),
            record: record
        });

        productForm.show();
    }
});