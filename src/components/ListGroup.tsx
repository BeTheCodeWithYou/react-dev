import { useState } from "react";

interface ListGroupProps {
  items: string[];
  title: string;
  onSelectItem: (item:string) => void
}

function ListGroup({ items, title, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setselectedIndex] = useState(-1);

  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 && <p>no items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item)
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
