fetch('Week6\BookStore.json')
    .then((response) => response.json())
    .then((data) => appendData(data));