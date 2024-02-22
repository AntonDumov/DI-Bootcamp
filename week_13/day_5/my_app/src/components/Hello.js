const Hello = () => {
    let title = 'My Title';
    let show = true;
    let arr = [
        { name: 'John' },
        { name: 'Anne' },
        { name: 'Dan' }
    ];

    if (!show) {
        return <>Not authorized</>
    }

    return (
        <>
            <h1>{title}</h1>
            {show ? <h2>AAA</h2> : <h2>BBB</h2>}
            {

                arr.map(item => {
                    return <div>{item.name}</div>;
                })
            }
        </>
    );
};

export default Hello;
