const getWishList = () => {
  const storedListString = localStorage.getItem("wish-list");
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  } else {
    return [];
  }
};

const addToWishList = (id) => {
  const storedList = getWishList();
  if (storedList.includes(id)) {
    console.log(id, "already exist");
  } else {
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListString);
  }
};

export { getWishList, addToWishList };
