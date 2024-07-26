from pymongo import MongoClient
client = MongoClient("mongodb://localhost:27017/")
db = client['mydatabase']
collection = db['mycollection']

# Create Operation (insert)
document = {"name":"Chhagan","age":24,"city":"Rajasthan"}
result = collection.insert_one(document)
print("Inserted ID:",result.inserted_id)

# Read Operation 
document = collection.find_one({"name":"Chhagan"})
print(document)