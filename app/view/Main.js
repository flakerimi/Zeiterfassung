Ext.define('zeiterfassung.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainpanel',
	//requires: ['zeiterfassung.view.LoginForm'],
    config: {
        fullscreen: true,
		layout: 'card',
		cardAnimation: 'cube',
        items: [
            {                              
				// reference to the login form view, it is an item of the current view
                xtype : 'loginpanel'                 
            }
        ]
    }
});