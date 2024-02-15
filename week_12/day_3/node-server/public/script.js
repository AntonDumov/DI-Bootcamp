const init = () => {
    fetch('http://localhost:3001/api/products')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const html = data.map(item => {
                return `<div style="display:inline-block;border:1px solid #000;text-align:center; margin:20px;padding:20px;">
            <h2>${item.name}</h2> 
            <h3>${item.price}</h3>
        </div>`;
            });
            document.getElementById('root').innerHTML = html.join('');
        })
        .catch((e) => {
            console.log(e);
        });


    // fetch('http://localhost:3001/api/users')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         const html = data.map(item => {
    //             return `<div>
    //         ${item.name} ${item.email}
    //     </div>`;
    //         });
    //         document.getElementById('root').innerHTML += html.join('');
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     });
};

document.querySelector('#productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const r = await fetch('http://localhost:3001/api/products', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('product-name'),
            price: Number(formData.get('product-price'))
        })
    });
    const data = await r.json();
    const newHTML = `<div style="display:inline-block;border:1px solid #000;text-align:center; margin:20px;padding:20px;">
            <h2>${data[0].name}</h2> 
            <h3>${data[0].price}</h3>
        </div>`;
    document.getElementById('root').innerHTML += newHTML;
});

init();