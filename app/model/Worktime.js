Ext.define('zeiterfassung.model.Worktime', {
    extend: 'Ext.data.Model',
    config: {
        fields: [

 
            {name: 'id', type: 'int'},
            {name: 'cnr', type: 'auto'},
			{name: 'description', type: 'auto'},
			{name: 'stockAmount', type: 'auto'},
			{name: 'costs', type: 'auto'},
			{name: 'available', type: 'auto'}
        ]			
    }
});