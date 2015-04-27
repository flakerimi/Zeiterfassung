Ext.define('zeiterfassung.view.LoginPanel', {
    extend: 'Ext.Panel',
    xtype: 'loginpanel',
	requires: ['zeiterfassung.view.LoginForm'],
    config: {
        fullscreen: true,
		layout: 'card',
		cardAnimation: 'cube',
        items: [
            {                              
				// reference to the login form view, it is an item of the current view
                xtype : 'loginform'                 
            }
        ]
    }
});