export const getFilterdItems = (items, key, filterString) => {
  return items.filter(
    item => item[key].toLowerCase().indexOf(filterString.toLowerCase()) > -1
  );
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
