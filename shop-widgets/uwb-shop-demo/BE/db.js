import { JSONFilePreset } from 'lowdb/node'
const defaultData = { orders: [], products: [] }


async function getRecords(table) {
    const db = await JSONFilePreset('db.json', defaultData);
    return db.data[table];
}

async function updateRecords(records, table) {
    const db = await JSONFilePreset('db.json', defaultData);
    db.data[table] = records;
    await db.write();
}

export { getRecords, updateRecords };