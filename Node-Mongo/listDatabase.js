export default async function listDatabase(client) {
  const databaseList = await client.db().admin().listDatabase();
  console.log("Databases:");
  databaseList.databases.forEach((db) => console.log(` ${db.name}`));
}
