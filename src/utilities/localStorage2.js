import { toast } from "react-toastify";

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
    toast.error("already exist in wish list");
  } else {
    console.log(id, "added successfully");
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListString);
    toast.success("successfully added in the wish list");
  }
};

export { getWishList, addToWishList };
