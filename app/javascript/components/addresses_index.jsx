import React from "react";
import Table from './shared/tables/material_table';
import $ from "jquery";
export default class AdressesIndex extends React.Component {
	
	handleCreate = (newData) =>{
		let self = this;
		const data ={address: {person_id: newData.person_id , address1: newData.address1 , address2: newData.address2 , city: newData.city , state: newData.state, zip_code: newData.zip_code , primary: newData.primary}}
		$.ajax({
			url: '/addresses',
			type: 'POST',
			data: data,
			dataType: 'json',
			success: function (response){
				console.log('success')
			},
			error: function (response){
				console.log(response.responseJSON.error)
			},
		});
	}
	handleUpdate = (newData, oldData) =>{
		let self = this;
		const data1=  oldData.id;
		const data={address: {person_id: newData.person_id , address1: newData.address1 , address2: newData.address2 , city: newData.city , state: newData.state, zip_code: newData.zip_code , primary: newData.primary}};
		$.ajax({
		url: '/addresses/'+data1,
		type: 'PATCH',
		data: data,
		dataType: 'json',
		success: function (response){
		console.log('success')
		},
		error: function (response){
		console.log(response.responseJSON.error)
		},
		});
	}
	handleDelet = (oldData) =>{
		let self = this;
		const data=  oldData.id;
		$.ajax({
		url: '/addresses/'+data,
		type: 'DELETE',
		data: data,
		dataType: 'json',
		success: function (response){
		console.log('success')
		},
		error: function (response){
		console.log(response.responseJSON.error)
		},
		});
	}
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
				options={{filtering: false, addRowPosition: 'first'}}
				editable={{
					onRowAdd: newData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								/* setData([...data, newData]); */
			                    this.handleCreate(newData);
								resolve();
							}, 1000);
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								this.handleUpdate(newData, oldData);
								resolve();
							}, 1000);
						}),
						onRowDelete: oldData =>
						new Promise((resolve, reject) => {
						  setTimeout(() => {
							this.handleDelet(oldData);
							
							resolve()
						  }, 1000)
						}),
				}}
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
							})
					})
				}
			/>
        )
    }

}