Ext.define('zeiterfassung.controller.WorktimeController', {
    
	extend: 'Ext.app.Controller',
    
    config: {
        
		
		 
        control: {
            
        }
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('Initialized zeiterfassung.controller.Worktime');        
    },
	
	index: function() {		
		zeiterfassung.store.Worktimes = new zeiterfassung.store.Worktimes();	
		zeiterfassung.view.WorktimeActivities = new zeiterfassung.view.WorktimeActivities();										    
		// And set the active item in the view		
		zeiterfassung.view.Main.setActiveItem('WorktimeActivities', { type: 'cube', direction: 'right' });
		
		console.log('zeiterfassung.controller.Worktime.index() called');
	}
	
});