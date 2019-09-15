import React from 'react'

const UserListsEntry = ({ name, isSelected, selectList, removeList }) => {
  return (
    <li onClick={selectList} className={isSelected ? 'selected' : null}>
      <button onClick={removeList}>X</button>
      {name}
    </li>
  )
}

export default UserListsEntry
