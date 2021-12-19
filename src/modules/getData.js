const getData = (str) => {
  return fetch(
    `https://o-zone-558ee-default-rtdb.firebaseio.com/goods.json?${
      str ? `search=${str}` : ""
    }`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
