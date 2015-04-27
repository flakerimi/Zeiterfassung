Ext.define('zeiterfassung.store.Worktimes', {
    extend: 'Ext.data.Store',	
    requires: ['Ext.data.proxy.Rest'],	
    config: {
        model: 'zeiterfassung.model.Worktime',
		autoLoad: true,				
		proxy: {
            type: 'rest',
            url:  localStorage.getItem('basepath')+'worktime/activities?userid='+localStorage.getItem('token')+'&limit=100&startIndex=0&filterCnr=13',  
 			reader: {
                    type: 'json',
                    rootProperty : 'data',
                    totalCount: 'count',
					successProperty: 'success'
                }
        }		
	}
});	