Ext.define('zeiterfassung.controller.MainController', {
    extend: 'Ext.app.Controller',
	
    config: {
        refs: {  
			mainPanel: 'mainpanel'
        },
        control: {
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('zeiterfassung.controller.Main Initialized');
    },
	
	index: function(){

		//if(localStorage.getItem('token'))
		    zeiterfassung.view.Main = new zeiterfassung.view.Main();		
 	//	else
		//    zeiterfassung.view.LoginPanel = new zeiterfassung.view.LoginPanel();		

	}
	
	
});