Ext.define('zeiterfassung.view.ClientsList', {
    extend: 'Ext.List',
	xtype: 'clientlist',
    config: {
		store: 'Clients',
		itemTpl: [
            '<div>{name1}</div><div>{city}{zip}{countryCode}</div><div>{string}</div>'
        ],		
		items: [{
            title: 'Simple',
            layout:  {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            }
        }],
		listeners: {				
			select: function(view, record) {
 		//		zeiterfassung.app.getController('zeiterfassung.controller.ClientController').index();							
 					console.log('called wt');
 					zeiterfassung.app.getController('zeiterfassung.controller.WorktimeController').index();							
		/*	Ext.Ajax.request({						
		            url: 'http://demo.heliumv.at:8280/restapi/services/rest/api/v1/customer/'+record.get('id')+'?userid='+localStorage.getItem('token')+'&startIndex=0&limit=10',	
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
	  				success: function(form, result) {
	  					var res = Ext.JSON.decode(form.responseText);
	 				 Ext.Msg.alert(res.name1 + ' (' + res.sign + ')', res.name2 +'  '+ res.name3 +' <br>'+ res.zipcode +' '+ res.city +' <br>'+ res.countryName  );

					console.log( Ext.JSON.decode(form.responseText));																														
					},
				
					failure: function(form, action) {

					//				zeiterfassung.app.getController('zeiterfassung.controller.Client.Controller').index();							

						console.log("fails: " +loginForm.getValues().toString());																														
					//	obj = Ext.JSON.decode(action.responseText); 
					//	Ext.Msg.alert('Login Failed!', obj.token); 
					//	console.log(obj.token);																														
					}
				});		*/
			}
		}
    }
	
});
