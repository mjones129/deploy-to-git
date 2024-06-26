import Boilerplate from './Boilerplate';
import fs from 'fs-extra';
import path from 'path';

const packageJSON = fs.readJsonSync(path.join(__dirname, '../package.json'));
const addonID = packageJSON.slug;

export default function (context) {
	const { React, hooks } = context;

	/*
	 * The `path` is relative to the context of this hook, which is the currently viewed site
	 *
	 * The full path would look something like `/main/site-info/:siteID/<below-path-var>`
	 */
	hooks.addFilter('siteInfoToolsItem', (menu) => [
		...menu,
		{
			menuItem: 'Deploy To Git',
			path: `/${addonID}`,
			render: (props) => <Boilerplate {...props} />,
		},
	]);
}
