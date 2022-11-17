import React from 'react';
import Table from './shared/tables/material_table';
import $ from "jquery";

export default class BookIndex extends React.Component {

  // create
  handleCreate = (newData) =>{
		let self = this;
    		const data ={book: {book_name: newData.book_name}}
		$.ajax({
			url: '/books',
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
  // update
  handleUpdate = (newData, oldData) =>{
		let self = this;
    const data1=  oldData.id;
		const data={book: {book_name: newData.book_name}};
		$.ajax({
  		url: '/books/'+data1,
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
  // Delete
  handleDelet = (oldData) =>{
    let self = this;
    const data=  oldData.id;
    $.ajax({
      url: '/books/'+data,
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
			{ title: 'Book Id', field: 'id' },
			{ title: 'book Name', field: 'book_name' }
		]

		return (
			<Table
				title={'Books'}
				columns={columns}
				options={{filtering: false, addRowPosition: 'first'}}
				editable={{
					onRowAdd: newData =>
						new Promise((resolve, reject) => {
							setTimeout(() => {
								this.handleCreate(newData);
								resolve();
							}, 500);
						}),

          onRowUpdate: (newData, oldData) =>
   						new Promise((resolve, reject) => {
   							setTimeout(() => {
   								this.handleUpdate(newData, oldData);
   								resolve();
   							}, 500);
   						}),

          onRowDelete: oldData =>
						new Promise((resolve, reject) => {
						  setTimeout(() => {
							this.handleDelet(oldData);
							resolve();
            }, 500);
					 }),
         }}

				data={query =>
					new Promise((resolve, reject) => {
						var filters
						if (query.filters.length > 0) {
							filters = query.filters.map((col) => ({field: col.column.field, value: col.value}))
						}
						let url = `/books.json?`
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
									data: result.books,
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
