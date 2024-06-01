const express=require("express")
const cors=require("cors")
const { MongoClient }=require("mongodb")
	
const app=express()
app.use(cors())
app.use(express.json())

app.post("/create",(req,res) => {
	const url="mongodb://0.0.0.0:27017"
	MongoClient.connect(url,(err,database)=> {
		if(err)
		{
			console.log(err)
		}
		else
		{
			let dbo=database.db("hackathon2023")
			let data={"name":req.body.name,"address":req.body.add,"phone":req.body.phone,"date":req.body.date,"time":req.body.time,"Event":req.body.party}
			dbo.collection("EventData").insertOne(data,(err,result) => {
				if (err)
					res.send(err)
				else
					res.send(result)
			})
		}
	})
})
app.listen(9999,()=>{ console.log("ready @9999")})

		