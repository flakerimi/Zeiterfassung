//<debug>
Ext.Loader.setPath({
    'Ext': 'sdk/src'
});
//</debug>

Ext.application({
    models: ['Client','Worktime'],

    controllers: ['LoginController', 'MainController', 'ClientController', 'WorktimeController'],
	
	views: ['Main','LoginPanel','Timelist','ClientsPanel', 'ClientsList', 'WorktimeActivities', 'WorktimeActivityList'],
    
	stores: ['Clients','Worktimes'],
	
	name: 'zeiterfassung',

    requires: [
        'Ext.MessageBox'
    ],
	
	appFolder: 'app',

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/Icon~ipad.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/Icon~ipad@2x.png'
    },
    
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        // Call the main controller        
		this.getApplication().getController('zeiterfassung.controller.MainController').index();		
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function() {
                window.location.reload();
            }
        );
    }
});
