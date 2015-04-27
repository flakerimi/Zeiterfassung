Ext.define('zeiterfassung.view.WorktimeActivities', {
    extend: 'Ext.Panel',    
	id: 'WorktimeActivities',	       
		
	config: {
        fullscreen: true,
		layout: 'card',		
        items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Worktime Activities',
				items: [
			     {
			      xtype: 'button',
			      ui: 'back',
			      text: 'Prev'
			     }
			      
			    ]
			},
			
			{
				xtype: 'worktimeactivitylist',
			}
        ]

	}

});