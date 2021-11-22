import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const ExpenseItem = ({
  expense: { id, charge, amount },
  handleDelete,
  handleEdit,
}) => {
  return (
    <li className="item" style={{marginTop:"130px"}}>
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount" style={{marginLeft:"260px"}}>{amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
