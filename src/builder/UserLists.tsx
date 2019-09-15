import React from 'react'
import UserListsEntry from './UserListsEntry'

/*
 * State suggestion:
 *  - all user lists
 *    [
 *      {
 *        id: 'list7000',
 *        name: 'my basilean list',
 *        ...
 *      },
 *      {
 *        id: 'list7064',
 *        name: 'list for CoK2020',
 *        ...
 *      }
 *    ]
 *  - selected list ID
 */
const UserLists = ({ userLists, currentListId, selectList, newList, removeList }) => {
  const handleNewList = (evt) => {
    evt.preventDefault()
    evt.stopPropagation()
    newList()
  }

  const selectListHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      selectList(id)
    }
  }

  const removeListHandler = (id: string) => {
    return (evt) => {
      evt.preventDefault()
      evt.stopPropagation()
      removeList(id)
    }
  }

  const listItems = userLists.map((list) =>
    <UserListsEntry
      key={list.id}
      name={list.name}
      isSelected={list.id === currentListId}
      selectList={selectListHandler(list.id)}
      removeList={removeListHandler(list.id)}
    />
  )

  return (
    <div className="user_lists">
      <div><b>UserLists</b></div>
      {userLists.length > 0 ? '' : <div> please create a new list </div>}
      <ul>{listItems}</ul>
      <div>
        <button onClick={handleNewList}>NEW LIST</button>
      </div>
    </div>
  )
}

export default UserLists
