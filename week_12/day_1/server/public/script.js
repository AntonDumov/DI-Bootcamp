fetch('http://localhost:3001/api/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector('#root').innerHTML = data.map(item => {
            return `<div>${item.name} -- ${item.price}</div>`;
        }).join('');
    })
    .catch(e => {
        console.log(e);
    });
