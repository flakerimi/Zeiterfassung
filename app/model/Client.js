Ext.define('zeiterfassung.model.Client', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name1', type: 'auto'},
			{name: 'sign', type: 'auto'},
			{name: 'city', type: 'auto'},
			{name: 'deliveryAllowed', type: 'auto'},
			{name: 'representativeSign', type: 'auto'},
			{name: 'countryCode', type: 'auto'},
			{name: 'phone', type: 'auto'}
        ]			
    }
});