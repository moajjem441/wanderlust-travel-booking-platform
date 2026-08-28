const express =require("express");
const app = express();
const cors=require('cors');
const dotenv=require("dotenv");

dotenv.config();

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");
const uri =process.env.MONG_AUTH;
const port =process.env.PORT 


app.use(cors());
app.use(express.json());


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const JWKS=createRemoteJWKSet(
  new URL(`${process.env.CLIENT_AUTH}/api/auth/jwks`)
)


//for token
const verification = async (req,res,next)=>{
  const header = req.headers.authorization
  if(!header){
    return res.status(401).json({message:"Unauthorized"})
  }
  const token = header.split(" ")[1]
  // console.log(header)
  if(!token){
    return res.status(401).json({message:"Unauthorized"})
  }

  try{
    const {payload}= await jwtVerify(token,JWKS)
    // console.log(payload)
     next()
  }
  catch(error){
    return res.status(403).json({message:"Forbidden"});
  }

 
};




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    //database and collection create
    const db=client.db("wanderlust")
    const destinationCollection = db.collection("destination")
    const bookingCollection =db.collection("bookings")


    //get api for collecting data from database
    app.get('/destination',async(req,res)=>{
        const result = await destinationCollection.find().toArray();
        res.json(result)
    })


   
    //api create for destination
   app.post('/destination',async(req,res)=>{
    const destinationData = req.body
     console.log(destinationData)
    const result = await destinationCollection.insertOne(destinationData)
    res.json(result)
    console.log(result)
   })






   //get api call for collecting destination details data
   app.get('/destination/:id',verification,async(req,res)=>{
    const {id}=req.params;
    const result =await destinationCollection.findOne({_id: new ObjectId(id)});
    res.json(result);
   })



   //patch api call for edit data
   app.patch('/destination/:id',async(req,res)=>{
    const {id}=req.params;
    const updateDestination=req.body;
    const result= await destinationCollection.updateOne({_id: new ObjectId(id)},{$set:updateDestination})
    res.json(result);
   })


   //delete api for delete destinaiton data
   app.delete('/destination/:id',async(req,res)=>{
    const {id}=req.params
    const result = await destinationCollection.deleteOne({_id: new ObjectId(id)})
    res.json(result)
   })




  //  --------------<Bookings>---------------
  app.post('/bookings',verification,async(req,res)=>{
    const bookingData = req.body

    const result= await bookingCollection.insertOne(bookingData)
    res.json(result)
  })


  app.get("/bookings/:userId",async(req,res)=>{
    const {userId}=req.params;
    const result = await bookingCollection.find({userId:userId}).toArray();
    res.json(result)
  })
   


  app.delete("/bookings/:bookingId",async(req,res)=>{
    const {bookingId}=req.params
    const result =await bookingCollection.deleteOne({_id: new ObjectId(bookingId)})
    res.json(result)
  })

    


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send("Server is runnig perfectly")
})


app.listen(port,(req,res)=>{
    console.log(`Server is running on Port${port}`)
})



