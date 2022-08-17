import ItemView from "../ItemView";
import TableHeader from "../TableHeader";

interface ItemListViewProps {
  itemList: any[],
  handleSetQuantity: (id: number, value: number) => void,
}

function ItemListView(props: ItemListViewProps) {
  const { itemList, handleSetQuantity } = props;

  const headers = ['Name', 'Description', 'Retail Price', 'Quantity'];

  return (
    <div>
      <TableHeader titles={headers} />
      <ul>
        {itemList.map(item => (
          <ItemView 
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            retailPrice={item.retailPrice}
            quantity={item.quantity}
            setQuantity={handleSetQuantity}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemListView;
