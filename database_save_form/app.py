from flask import Flask, request, redirect, url_for, render_template
from pymongo import MongoClient
from werkzeug.security import generate_password_hash

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['mydatabase']
collection = db['users']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']
    
    # Hash the password for security
    # hashed_password = generate_password_hash(password, method='sha256')
    
    # Create a new user document
    user = {
        'username': username,
        'email': email,
        'password': password
    }
    
    # Insert the user into MongoDB
    collection.insert_one(user)
    
    return redirect(url_for('index'))

@app.route('/users')
def users():
    users_list = collection.find()
    return render_template('users.html',users=users_list)

if __name__ == '__main__':
    app.run(debug=True)
