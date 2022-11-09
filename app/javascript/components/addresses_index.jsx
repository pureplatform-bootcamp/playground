import React from "react";
import Table from './shared/tables/material_table';

export default class AdressesIndex extends React.Component {
    render() {
		const columns = [
			{ title: 'Person id', field: 'person_id' },
			{ title: 'Address1', field: 'address1' },
			{ title: 'Address2', field: 'address2' },
			{ title: 'City', field: 'city' },
			{ title: 'State', field: 'state' },
			{ title: 'Zip code', field: 'zip_code' },
            { title: 'Primary', field: 'primary' },

		]
		return (
			<Table
				title={'Addresses'}
				columns={columns}
				options={{filtering: false}}
				data={query =>
					new Promise((resolve, reject) => {
						var filters
						if (query.filters.length > 0) {
							filters = query.filters.map((col) => ({field: col.column.field, value: col.value}))
						}
						let url = `/addresses.json?`
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
									data: result.addresses,
									page: result.page - 1,
									totalCount: result.total,
								});
								window.breadcrumb.addBreadcrumb(result.breadcrumb);
							})
					})
				}
			/>
        )
    }

}