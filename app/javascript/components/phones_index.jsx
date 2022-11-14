import React from "react";
import Table from "./shared/tables/material_table";
import $ from "jquery";

export default class PhonesIndex extends React.Component {
  handleCreate = (newData) => {
    const data = {
      phone: {
        person_id: newData.person_id,
        phone_number: newData.phone_number,
        phone_type: newData.phone_type,
        primary: newData.primary,
      },
    };
    $.ajax({
      url: "/phones",
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
  handleDelete = (oldData) => {
    $.ajax({
      url: "/phones/" + oldData.id,
      type: "DELETE",
      dataType: "json",
      success: function (response) {
        console.log("success");
      },
      error: function (response) {
        console.log(response.responseJSON.error);
      },
    });
  };
  handleUpdate = (oldData, newData) => {
    const data = {
      phone: {
        person_id: newData.person_id,
        phone_number: newData.phone_number,
        phone_type: newData.phone_type,
        primary: newData.primary,
      },
    };
    $.ajax({
      url: "/phones/" + oldData.id,
      data: data,
      type: "PATCH",
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
      { title: "Person ID", field: "person_id" },
      { title: "Phone Number", field: "phone_number" },
      { title: "Phone Type", field: "phone_type" },
      { title: "Primary", field: "primary" },
    ];

    return (
      <Table
        title={"Phones"}
        columns={columns}
        options={{ filtering: false, addRowPosition: "first" }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                this.handleCreate(newData);
                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                this.handleUpdate(oldData, newData);
                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                this.handleDelete(oldData);
                resolve();
              }, 1000);
            }),
        }}
        data={(query) =>
          new Promise((resolve, reject) => {
            var filters;
            if (query.filters.length > 0) {
              filters = query.filters.map((col) => ({
                field: col.column.field,
                value: col.value,
              }));
            }
            let url = `/phones.json?`;
            url += "per_page=" + query.pageSize;
            url += "&page=" + (query.page + 1);
            if (query.filters.length > 0) {
              url += "&filters=" + JSON.stringify(filters);
            }
            if (query.orderBy) {
              url += "&orderBy=" + query.orderBy.field;
              url += "&orderDirection=" + query.orderDirection;
            }
            if (query.search) {
              url += "&search=" + query.search;
            }
            fetch(url)
              .then((response) => response.json())
              .then((result) => {
                resolve({
                  data: result.phones,
                  page: result.page - 1,
                  totalCount: result.total,
                });
              });
          })
        }
      />
    );
  }
}
