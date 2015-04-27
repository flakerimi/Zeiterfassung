Ext.define('zeiterfassung.store.Clients', {
    extend: 'Ext.data.Store',	
    requires: ['Ext.data.proxy.Rest'],	
    config: {
        model: 'zeiterfassung.model.Client',
		autoLoad: true,				
		proxy: {
            type: 'rest',
            url: localStorage.getItem('basepath')+'customer?userid='+localStorage.getItem('token')+'&startIndex=0&limit=1000',	
			reader: {
                    type: 'json',
                    rootProperty : 'data',
                    totalCount: 'count',
					successProperty: 'success'
                }
        }		
	}
});	