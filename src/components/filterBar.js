import filterButton from './filterButton';
import { React } from 'react';

const filters = ['all', 'active', 'completed'];
const filterBar = () =>
	<div> { filters.map(filterButton)}</div>;

export default filterBar;
