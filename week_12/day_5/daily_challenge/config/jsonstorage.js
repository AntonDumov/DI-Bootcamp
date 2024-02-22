const fs = require('fs');

class JSONStorage {
    constructor(filename) {
        this.filename = filename;
        if (!fs.existsSync(this.filename)) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    create(data) {
        const records = this.read();
        const newRecord = { id: Date.now(), ...data }; // Unique ID generated using current timestamp
        records.push(newRecord);
        this.write(records);
        return newRecord.id; // Return the ID of the newly created record
    }

    read() {
        const data = fs.readFileSync(this.filename, 'utf8');
        return JSON.parse(data);
    }

    update(id, newData) {
        const records = this.read();
        const index = records.findIndex(record => record.id === id);
        if (index !== -1) {
            records[index] = { ...records[index], ...newData };
            this.write(records);
        } else {
            console.log("Record not found.");
        }
    }

    delete(id) {
        const records = this.read();
        const index = records.findIndex(record => record.id === id);
        if (index !== -1) {
            records.splice(index, 1);
            this.write(records);
        } else {
            console.log("Record not found.");
        }
    }

    write(data) {
        fs.writeFileSync(this.filename, JSON.stringify(data, null, 4));
    }
}

module.exports = new JSONStorage('./config/users.json');
