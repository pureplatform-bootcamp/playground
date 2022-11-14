import React from 'react';
import Table from './shared/tables/material_table';
import $ from "jquery";

export default class CareersIndex extends React.Component  {
	handleCreate = (newData) => {
		const data = {
		  careers: {
			person_id: newData.person_id,
			company_name: newData.company_name,
			industry: newData.industry,
			title: newData.title,
			date_started: newData.date_started
		  },
		};
		$.ajax({
		  url: "/careers",
		  type: "POST",
		  data: data,
		  dataType: "json",
		  success: function (response) {
			console.log("success");
		  },
		  error: function (response) {
			console.log(response.responseJSON.error);
		  },
		});
	  };
	render() {
		const columns = [
			{ title: 'Person id', field: 'person_id' },
			{ title: 'Company name', field: 'company_name' },
			{ title: 'Industry', field: 'industry' },
			{ title: 'Title', field: 'title' },
			{ title: 'Date started', field: 'date_started' },
		]
		return (
			<Table
				title={'Careers'}
				columns={columns}
				options={{filtering: false}}
				editable={{
					onRowAdd: (newData) =>
                    new Promise((resolve, reject) => {
                    setTimeout(() => {
                    this.handleCreate(newData);
                    resolve();
                  }, 1000);
                 }),
				}}
				data={query =>
					new Promise((resolve, reject) => {
						var filters
						if (query.filters.length > 0) {
							filters = query.filters.map((col) => ({field: col.column.field, value: col.value}))
						}
						let url = `/careers.json?`
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
									data: result.careers,
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