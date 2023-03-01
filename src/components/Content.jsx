import React from "react";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      <ul>
        {items.length ? (
        items.map((item) => (
          <li key={item.id}>
            <div>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                <div style={item.checked ? { textDecoration: 'line-through' } : null}>     
               {item.item}
                </div>
            </div>
                <button
                    onClick={() => handleDelete(item.id)}
                >Delete</button>
          </li>
        ))
        ) : <h2>No Item(s)</h2>
        }
      </ul>
    </main>
  );
};

export default Content;
