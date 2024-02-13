import books from '../config/db.js';

export const getAllBooks = (req, res) => {
    res.json({ok:true, data: books.list });
};

export const addNewBook = (req, res) => {
    const newBook = { ...req.body, id: books.nextID };
    books.list.push(newBook);
    books.nextID++;
    res.json({ok:true, data: newBook });
};

export const updateBookByID = (req, res) => {
    const i = books.list.findIndex(b => b.id === Number(req.params.id));
    if (i === -1) {
        return res.status(404).json({ ok: false, msg: `No book with id ${req.params.id}` });
    }
    for (const bookKey in req.body) {
        if (books.list[i].hasOwnProperty(bookKey)) books.list[i][bookKey] = req.body[bookKey];
    }
    res.json({ok:true, data: books.list[i] });
};

export const deleteBookByID = (req, res) => {
    const i = books.list.findIndex(b => b.id === Number(req.params.id));
    if (i === -1) {
        return res.status(404).json({ ok: false, msg: `No book with id ${req.params.id}` });
    }
    books.list.splice(i, 1);
    res.json({ ok: true });
};
