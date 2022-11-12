import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	return (
	
// 	<ul className="list">
// 	{expenses.map(ExpenseList => (
// 	  <Transaction key={ExpenseList.id}  Expense={Expense} />))}
//   </ul>

		<ul className='badge badge-secondary'>
			{expenses.map((expense) => (
				<ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
	 );
};

export default ExpenseList;