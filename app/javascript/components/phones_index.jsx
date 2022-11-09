import React from "react";
import Table from "./shared/tables/material_table";

export default class PhonesIndex extends React.Component {
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
        options={{ filtering: false }}
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
