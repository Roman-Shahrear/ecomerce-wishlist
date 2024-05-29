# ecomerce-wishlist

Run Locally
For locally installation or run this project, you need to copy the json file from all the packages or you just clone the project or download zip file.

Go to the project directory

  cd ecomerce-wishlist
Install dependencies

  npm install
Start the server

  npm run dev
#For see this app testing live API testing, just go this link or click this link ------> http://localhost:3001/api-docs/#/

demo test json data:

{ "wishlist": [ { "_id": "6657436f1748db2cf7410d99", "tags": ["gadget"], "category": "Electronics" }, { "_id": "6657436f1748db2cf7410d9a", "tags": ["novel"], "category": "Books" } ] }

output:

[ { "_id": "6657436f1748db2cf7410d9b", "name": "Product 3", "category": "Electronics", "tags": [ "device" ], "price": 299.99, "__v": 0, "createdAt": "2024-05-29T15:02:07.827Z", "updatedAt": "2024-05-29T15:02:07.827Z" } ]