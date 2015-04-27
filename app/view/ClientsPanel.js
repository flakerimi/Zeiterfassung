Ext.define('zeiterfassung.view.ClientsPanel', {
    extend: 'Ext.Panel',    
	id: 'clientspanel',	       
		
	config: {
        fullscreen: true,
		layout: 'card',		
        items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Auftrag / Kunde',
				items: [
			     {
			      xtype: 'button',
			      ui: 'back',
			      text: 'Prev'
			     }
			      
			    ]
			},
			
			{
				xtype: 'clientlist',
			}
        ]

	}

});