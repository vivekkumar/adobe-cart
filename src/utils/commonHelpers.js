export const getFilterdItems = (items, { searchQuery, sort }) => {
  const filteredList = items.filter(
    item => item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
  );

  return sortBy(filteredList, sort);
};

export const groupCartItems = cart => {
  let group = {};

  for (let i = 0; i < cart.length; i++) {
    let name = cart[i].name;
    if (!group[name]) {
      group[name] = {
        item: cart[i],
        count: 0
      };
    }
    group[name].count++;
  }

  return Object.values(group);
};

export const getPriceDetails = itemGroup => {
  let totalPrice = 0;
  let totalDisplay = 0;
  let totalDiscount = 0;
  let amountPayable = 0;

  for (let i = 0; i < itemGroup.length; i++) {
    let count = itemGroup[i].count;
    let item = itemGroup[i].item;

    totalPrice += item.price.actual * count;
    totalDisplay += item.price.display * count;
  }
  totalDiscount = totalDisplay - totalPrice;
  amountPayable = totalDisplay - totalDiscount;

  return {
    totalDisplay,
    totalDiscount,
    amountPayable
  };
};

export const sortBy = (collection, sort) => {
  return collection.sort((c1, c2) => {
    let v1, v2;
    if (sort.value !== 2) {
      // Sort by price
      v1 = c1.price.actual;
      v2 = c2.price.actual;

      return sort.value === 0 ? v1 - v2 : v2 - v1;
    }
    // Sort by discount
    v1 = c1.discount;
    v2 = c2.discount;
    return v1 - v2;
  });
};
