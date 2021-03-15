const db = require('./conn');
const express = require('express')

class comicsModel {
    constructor(id, name, published, issue) {
        this.id = id;
        this.name = name;
        this.published = published;
        this.issue = issue;
    }
    static async getAll() {
        const response = await db.any(`SELECT * FROM marvel_comics;`);
        return response;
    }
    static async addEntry(name, published, writer) {
        const response = await db.result(`INSERT INTO marvel_comics (name, published, writer) VALUES($1, $2, $3)`, [name, published, writer])
        return response;
    }
    async deleteEntry() {
        const response = await db.result(`DELETE FROM marvel_comics WHERE id = $1` [this.id])
        return response;
    }
}
module.exports = comicsModel;