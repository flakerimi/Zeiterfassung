Ext.define("zeiterfassung.view.LoginForm", {
    extend: 'Ext.form.Panel',
	xtype: 'loginform',
	title: 'Login',		
	iconCls: 'user',				
	layout: 'vbox',                				
    requires: [ 'Ext.TitleBar', 'Ext.form.Panel', 'Ext.form.FieldSet', 'Ext.field.Password', 'Ext.List'],
	
    config: {
		fullscreen: true,
		masked: {				
			message: 'Loggin in..',
			xtype: 'loadmask',
			hidden: true
		},								

		items: [
			{
				docked: 'top',
				xtype: 'image',
				src: 'resources/images/logo.png',
				mode: 'image',
				style: 
					{
					'width': '50%',
					'height': '20%'
					}
			},
			{
				xtype: 'fieldset',
				title: 'Login',                            
				items: [
					{
						xtype: 'textfield',
						name:  'host',
						label: 'Host',
						value: 'http://demo.heliumv.at:8280/restapi/services/rest/api/v1/'
					},
					{
						xtype: 'textfield',
						name:  'username',
						label: 'Username',
						value: 'Test'
					},
					{
						xtype: 'passwordfield',
						name:  'password',
						label: 'Password',
						value: 'test'
					},
				]
			},
			{
				xtype: 'button',
				text: 'Login',
				ui: 'confirm',
				formBind: true,	 
				id:'doLogin',
				action: 'doLogin'
			}			
		]
	}
});