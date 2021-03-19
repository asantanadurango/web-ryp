import { productList } from "./productList";

const navigationItems = [...new Set(productList.map((item) => item.category))];

export { navigationItems };
