import React from 'react';
import Table from '../table/table';

const TableList = () => {
	const tableData = [
		{
			day: 'Thursday',
			hours: [ '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04' ],
			promotions: [
				'Hot Seat',
				'Hot Seat',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand'
			],
			prices: [ 100, 100, 100, 250, 150, 250, 150, 250, 150, 250, 150, 250 ]
		},
		{
			day: 'Friday',
			hours: [ '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04' ],
			promotions: [
				'Hot Seat',
				'Hot Seat',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand'
			],
			prices: [ 100, 100, 100, 300, 150, 300, 150, 300, 150, 300, 150, 300 ]
		},
		{
			day: 'Saturday',
			hours: [ '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04' ],
			promotions: [
				'Hot Seat',
				'Hot Seat',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand'
			],
			prices: [ 100, 100, 100, 300, 150, 300, 150, 300, 150, 300, 150, 300 ]
		},
		{
			day: 'Sunday',
			hours: [ '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04' ],
			promotions: [
				'Hot Seat',
				'Hot Seat',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand',
				'Hot Seat',
				'Golden Hand'
			],
			prices: [ 100, 100, 100, 500, 150, 500, 150, 500, 150, 500, 150, 500 ]
		}
	];

	return <div className="table-row">{tableData.map((table, i) => <Table key={i} table={table} />)}</div>;
};

export default TableList;
