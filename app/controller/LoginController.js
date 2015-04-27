Ext.define('zeiterfassung.controller.LoginController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            loginForm: 'loginform'
        },
        control: {
            'loginform button': {
                tap: 'doLogin'
            }            
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
		console.log('zeiterfassung.controller.LoginController Initialized');
    },
	
	doLogin: function() {
        var loginForm   = this.getLoginForm();


        host = loginForm.getValues().host;
		//loginForm.setMasked(true);					
		console.log(loginForm.getValues().password);

		Ext.Ajax.request({						
			url: host + 'logon',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			params: '{"username":"'+loginForm.getValues().username+'","password":"'+loginForm.getValues().password+'"}',
 			success: function(form, result) {

				localStorage.setItem('basepath', host);
				localStorage.setItem('token', Ext.JSON.decode(form.responseText).token);

 				zeiterfassung.app.getController('zeiterfassung.controller.ClientController').index();							
			},
			
			failure: function(form, action) {

				//				zeiterfassung.app.getController('zeiterfassung.controller.Client.Controller').index();							

				console.log("fails: " + '{"username":"'+loginForm.getValues().username+'","password":"'+loginForm.getValues().password+'"}');																														
			//	obj = Ext.JSON.decode(action.responseText); 
			//	Ext.Msg.alert('Login Failed!', obj.token); 
			//	console.log(obj.token);																														
			}
		});		
	//	loginForm.setMasked(false);	
    }	
});