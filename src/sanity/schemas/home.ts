export default {
	name: 'home',
	type: 'document',
	title: 'Home',

	fields: [
		{
			name: 'greeting',
			type: 'string',
			title: 'Greeting',
		},
		{
			name: 'name',
			type: 'string',
			title: 'Name',
		},
		{
			name: 'specialty',
			type: 'string',
			title: 'Specialty',
		},
		{
			name: 'socialLinks',
			title: 'Social Links',
			type: 'array',
			of: [{ type: 'string' }],
		},
	],
};
