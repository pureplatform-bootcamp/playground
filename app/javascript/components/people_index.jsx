import React from 'react';
import Table from './shared/tables/material_table';

export default class PeopleIndex extends React.Component  {

	render() {
		const columns = [
			{ title: 'First Name', field: 'first_name' },
			{ title: 'Last Name', field: 'last_name' },
			{ title: 'Birth date', field: 'birth_date' },
			{ title: 'Death date', field: 'death_date' },
			{ title: 'Gender', field: 'gender' },
			{ title: 'Email', field: 'email' },
		]
		return (
			<Table
				title={'People'}
				columns={columns}
				options={{filtering: false}}
				data={query =>
					new Promise((resolve, reject) => {
						var filters
						if (query.filters.length > 0) {
							filters = query.filters.map((col) => ({field: col.column.field, value: col.value}))
						}
						let url = `/people.json?`
						url += 'per_page=' + query.pageSize
						url += '&page=' + (query.page + 1)
						if (query.filters.length > 0) {
							url += '&filters=' + JSON.stringify(filters)
						}
						if (query.orderBy) {
							url += '&orderBy=' + query.orderBy.field
							url += '&orderDirection=' + (query.orderDirection)
						}
						if (query.search) {
							url += '&search=' + (query.search)
						}
						fetch(url)
							.then(response => response.json())
							.then((result) => {
								resolve({
									data: result.people,
									page: result.page - 1,
									totalCount: result.total,
								});
							})
					})
				}
			/>
		)
	}
}
