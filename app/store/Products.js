Ext.define('MyApp.store.Products', {
    extend: 'Ext.data.Store',
    model: 'MyApp.model.Product',

    data: [
        { id: 1, name: 'Товар 1', description: 'Описание 1', price: 100.0, quantity: 10 },
        { id: 2, name: 'Товар 2', description: 'Описание 2', price: 200.0, quantity: 0 },
        // Добавьте больше товаров по необходимости
    ]
});