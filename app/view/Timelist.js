Ext.define('zeiterfassung.view.Timelist', {
    extend: 'Ext.Container',
    xtype: 'listTime',
    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        text: '='
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'label',
                        html: 'vsgd'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        icon: 'true',
                        iconCls: 'search'
                    }
                ]
            },
            {
                xtype: 'list',
                itemTpl: [
                    '<div>List Item {string}</div>'
                ]
            },
            {
                xtype: 'toolbar',
                border: 0,
                docked: 'bottom',
                style: 'background: url(resources/images/new_bg_footer.png) center top no-repeat;   height:70px;',
                styleHtmlContent: true,
                modal: false,
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        height: 50,
                        ui: 'action-round',
                        icon: 'true',
                        iconAlign: 'top',
                        iconCls: 'add',
                        text: 'NEU'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ]
    }

});