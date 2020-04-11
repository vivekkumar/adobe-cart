export const ShoppingAPI = "https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380";

export const SortOptions = [
  { text: "Price -- High Low", value: 0 },
  { text: "Price -- Low High", value: 1 },
  { text: "Discount", value: 2 }
];

export const FilterOptions = [
  {
    type: "PriceRange",
    range: [100, 10000],
    subType: "MinMaxRange"
  }
];
