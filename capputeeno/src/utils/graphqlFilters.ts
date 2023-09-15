import { FilterType, PriorityTypes } from "@/@types/filter-types";

export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS) return { fiekd: "created_at", order: "ASC" };
  if (priority === PriorityTypes.BIGGEST_PRICE) return { field: "price_in_cents", order: "DSC" };
  if (priority === PriorityTypes.MINOR_PRICE) return { field: "price_in_cents", order: "ASC" };

  return { field: "sales", order: "DSC" };
}

export function getCategory(type: FilterType) {
  if (type === FilterType.MUG) return "mugs";
  if (type === FilterType.SHIRT) return "t-shirts";

  return "";
}

export function mountQuery(type: FilterType, priority: PriorityTypes) {
  if (type === FilterType.ALL && priority === PriorityTypes.POPULARITY) {
    return `query {
      allProducts(sortField: "sales", sortOrder: "DSC") {
        id
        name
        price_in_cents
        image_url
      }
    }`;
  }

  const sorterSettings = getFieldByPriority(priority);
  const categoryFilter = getCategory(type);

  return `query {
    allProducts(sortField: "${sorterSettings.field}", sortOrder: "${sorterSettings.order}", ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ""}) {
      id
      name
      price_in_cents
      image_url
    }
  }`;
}
