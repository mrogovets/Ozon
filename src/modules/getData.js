const getData = () => {
  return fetch(
    "https://o-zone-558ee-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
