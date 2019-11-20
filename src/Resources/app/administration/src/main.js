const { Component } = Shopware;

Component.override('sw-product-list', {
    computed: {
        productColumns() {
            const columns = this.$super('productColumns');

            columns.push({
                property: 'manufacturer.id',
                dataIndex: 'manufacturer.id',
                label: 'Manufacturer ID',
                inlineEdit: 'string',
                allowResize: true,
                align: 'left'
            });

            return columns;
        }
    }
});
