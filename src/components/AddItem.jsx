import React from 'react'

const AddItem = ({handleSubmit, addItem, setAddItem}) => {

  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              autoFocus
              required
              placeholder='Add Items'
              value={addItem}
              onChange={(e) => setAddItem(e.target.value)}
          />
          <button
              type="submit"
          >Add Item</button>
     </form>
  )
}

export default AddItem