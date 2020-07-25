import mongodb from "mongodb";

import create from "./CRUD/create";
import createMany from "./CRUD/createMany";
import listDatabase from "./listDatabase";

export default async function makeDb() {
  const MongoClient = mongodb.MongoClient;
  const url = "mongodb://localhost:27017";
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    const c = await client.connect();
    listDatabase(c);

    // Create operation
    // Single document insertion //
    /*
    await create(c, {
      name: "Kings House",
      summary: "A great house in Nepal.",
      bedrooms: 2,
      bathrooms: 2,
    });
    */

    // Multiple document insertion //
    await createMany(client, [
      {
        name: "Infinite Views",
        summary: "Modern home with infinite views from the infinity pool",
        property_type: "House",
        bedrooms: 5,
        bathrooms: 4.5,
        beds: 5,
      },
      {
        name: "Private room in London",
        property_type: "Apartment",
        bedrooms: 1,
        bathroom: 1,
      },
      {
        name: "Beautiful Beach House",
        summary:
          "Enjoy relaxed beach living in this house with a private beach",
        bedrooms: 4,
        bathrooms: 2.5,
        beds: 7,
        last_review: new Date(),
      },
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
