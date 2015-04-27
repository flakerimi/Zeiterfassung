Ext.define('zeiterfassung.view.WorktimeActivityList', {
    extend: 'Ext.List',
	xtype: 'worktimeactivitylist',
    config: {
		store: 'Worktimes',
		itemTpl: ['<div>{cnr}</div><div>{description}</div><div>{stockAmount}</div><div> {available}</div>'],		
		items: [{
            title: 'Worktime',
            layout:  {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            }
        }],
		listeners: {				
			select: function(view, record) {
                //alert('wt');
                console.log(view);
				//zeiterfassung.app.getController('zeiterfassung.controller.WorktimeController').index();							

			}
		}
    }
	
});
