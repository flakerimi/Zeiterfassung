Ext.define('zeiterfassung.controller.ClientController', {
    
	extend: 'Ext.app.Controller',
    
    config: {
        
		
		refs: {
            tablaList: 'clientlist'
        },
        control: {
            
        }
    },
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('Initialized zeiterfassung.controller.Client');        
    },
	
	index: function() {		
		//Instanciate the view
		
		//Ext.create('zeiterfassung.store.Clients');
		zeiterfassung.store.Clients = new zeiterfassung.store.Clients();	
		zeiterfassung.view.ClientsPanel = new zeiterfassung.view.ClientsPanel();										    
		// And set the active item in the view		
		zeiterfassung.view.Main.setActiveItem('clientspanel', { type: 'cube', direction: 'right' });
		
		console.log('zeiterfassung.controller.TablaController.index() called');
	}
	
});