Ext.define('Login.view.MyContainer', {
    extend: 'Ext.Container',

    requires: [
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Button',
        'Ext.SegmentedButton'
    ],

    config: {
        items: [
            {
                xtype: 'datepickerfield',
                docked: 'top',
                margin: 40,
                label: '',
                labelAlign: 'top',
                value: {
                    year: 2015,
                    month: 4,
                    day: 23
                },
                placeHolder: 'mm/dd/yyyy',
                dateFormat: 'd/m/Y'
            },
            {
                xtype: 'segmentedbutton',
                margin: 20,
                width: '90%',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        text: 'MyButton12'
                    },
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        width: '50%',
                        text: 'MyButton16'
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                margin: 20,
                width: '90%',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        text: 'MyButton12'
                    },
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        width: '50%',
                        text: 'MyButton16'
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                margin: 20,
                width: '90%',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        text: 'MyButton12'
                    },
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        width: '50%',
                        text: 'MyButton16'
                    }
                ]
            },
            {
                xtype: 'segmentedbutton',
                margin: 20,
                width: '90%',
                layout: {
                    type: 'hbox',
                    align: 'center',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        text: 'AUFTRAG'
                    },
                    {
                        xtype: 'button',
                        flex: 50,
                        margin: '0 10',
                        style: 'color:#069; background:#fff; border-radius: 5px;',
                        width: '50%',
                        text: 'LOS'
                    }
                ]
            },
            {
                xtype: 'button',
                margin: '0 auto',
                style: 'color:#fff',
                ui: 'plain',
                width: '50%',
                text: 'ABBRECHEN'
            }
        ]
    }

});