// import React from 'react';
import React, { useState, useEffect, useRef } from "react";
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from './tableIcons';

const defaultOptions = {
	pageSize: 25,
	pageSizeOptions: [25, 50, 100],
	rowStyle: {whiteSpace: 'normal', wordWrap: 'break-word'},
	headerStyle: {
		whiteSpace: 'nowrap',
		color: '#04423dd7',
		padding: '0.5em',
		backgroundColor: '#eff2f8'},
	cellStyle: { padding: '0.5em'},
	sorting: true,
	search: true,
	paging: true,
	toolbar: true,
	filtering: true,
	exportButton: false
}



function Table({title, options, columns, data, actions, editable, localization, cellEditable, tableRef, detailPanel, onRowClick}) {
	const tableOptions = {...defaultOptions, ...options};
	const [materialColumn] = useState(columns);

	const TOOLBAR_ID = "pure_table_toolbar_id";
	useEffect(() => {
    const searchBar = document.querySelector(`#${TOOLBAR_ID} input`);
    if (!searchBar) return;
    searchBar.focus();
  });

	return (
		<MaterialTable
			title={title}
			editable={editable}
			localization={localization}
			tableRef={tableRef}
			icons={tableIcons}
			options={tableOptions}
			columns={materialColumn}
			actions={actions}
			cellEditable={cellEditable}
			data={data}
			components={{
        Toolbar: props => {
          return (
            <div id={TOOLBAR_ID}>
              <MTableToolbar {...props} />
            </div>
          );
        }
      }}
			detailPanel={detailPanel}
			onRowClick={onRowClick}
		/>
	)
}
export default Table
