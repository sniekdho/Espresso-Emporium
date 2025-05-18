const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sniekdho.hx1c6qw.mongodb.net/?retryWrites=true&w=majority&appName=Sniekdho`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeesCollection = client.db("coffeeDB").collection("coffees");
    const usersCollection = client.db("coffeeDB").collection("users");

    // ============ coffeesCollection APIS ============
    app.get("/coffees", async (req, res) => {
      const result = await coffeesCollection.find().toArray();
      res.send(result);
    });

    app.get("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    });

    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
      const result = await coffeesCollection.insertOne(newCoffee);
      res.send(result);
    });

    app.put("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };

      const updatedCoffee = req.body;
      const updatedCoffeeDoc = {
        $set: updatedCoffee,
      };

      // const updateCoffeeDoc = {
      //   $set: {
      //     name: req.body.name,
      //     quantity: req.body.quantity,
      //     supplier: req.body.supplier,
      //     taste: req.body.taste,
      //     price: req.body.price,
      //     details: req.body.details,
      //     photoUrl: req.body.photoUrl,
      //   },
      // };

      const options = { upset: true };

      const result = await coffeesCollection.updateOne(
        filter,
        updatedCoffeeDoc,
        options
      );
      res.send(result);
    });

    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });
    // ============ coffeesCollection Ends ============

    // ============ usersCollection APIS ============
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const result = await usersCollection.findOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });

    app.post("/users", (req, res) => {
      const userData = req.body;

      // if (userData.phoneNumber) {
      //   if (userData.phoneNumber.startsWith("0")) {
      //     userData.phoneNumber = userData.phoneNumber.slice(1); // remove leading 0
      //   }
      //   userData.phoneNumber = "+880" + userData.phoneNumber; // add country code
      // }

      if (userData.phoneNumber?.startsWith("0")) {
        userData.phoneNumber = "+880" + userData.phoneNumber.slice(1);
      }

      const result = usersCollection.insertOne(req.body);
      res.send(result);
    });

    app.put("/users/:id", async (req, res) => {
      const result = await usersCollection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body },
        { upsert: true }
      );
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const result = await usersCollection.deleteOne({
        _id: new ObjectId(req.params.id),
      });
      res.send(result);
    });
    // ============ usersCollection Ends ============

    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
