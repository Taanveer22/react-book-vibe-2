import { toast } from "react-toastify";

const getReadList = () => {
  const storedListString = localStorage.getItem("read-list");
  if (storedListString) {
    const storedList = JSON.parse(storedListString);
    return storedList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storedList = getReadList();
  if (storedList.includes(id)) {
    console.log(id, "already exist");
    toast.error("already exist to read list");
  } else {
    console.log(id, "added successfully...");
    storedList.push(id);
    const storedListString = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListString);
    toast.success("successfully added to read list");
  }
};

export { getReadList, addToReadList };
