import Items from "./Items";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Items links={PRODUCTS} title="PRODUCT" />
      <Items links={RESOURCES} title="RESOURCES" />
      <Items links={COMPANY} title="COMPANY" />
      <Items links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
