import React from 'react';

import './table.scss';

const Table = ({ table }) => {
	console.log(table);

	return (
		<div className="table-column">
			<h5>{table.day}</h5>
			<div className="table__body">
				<div>
					<div className="table__cell time">Hour</div>
					{table.hours.map((hour, i) => (
						<div className="time" key={i}>
							{hour}:00
						</div>
					))}
				</div>
				<div>
					<div className="table__cell promotion">Promotion</div>
					{table.promotions.map((promotion, i) => (
						<div className="promotion" key={i}>
							{promotion}
						</div>
					))}
				</div>
				<div>
					<div className="table__cell price">Price</div>
					{table.prices.map((price, i) => (
						<div className="price" key={i}>
							£{price}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Table;
