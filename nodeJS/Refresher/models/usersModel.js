const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    age: Number,
    country: String
})


// ✅ Define a Mongoose model for interacting with the 'users' collection in MongoDB
// mongoose.model(<ModelName>, <SchemaDefinition>, <ExplicitCollectionName>)

const UsersModel = mongoose.model(
    'users',           // 🔹 Model name (used internally by Mongoose to register and reference this model)
    //    - Can be anything, but by convention it's usually singular and capitalized (e.g. 'User')
    //    - If you omit the 3rd argument, Mongoose will pluralize this to guess the collection name
    //    - Example: 'User' becomes 'users', 'PersonData' becomes 'persondatas'
    //    - This name is also used when accessing this model later via mongoose.models['users']
    //    - Example : mongoose.model('User', userSchema);
    //    - Mongoose will:
    //    - Take 'User'
    //    - Lowercase it
    //    - Pluralize it → 'users'
    //     - Then use 'users' as the MongoDB collection name

    usersSchema,       // 🔹 The schema definition for documents in this model (fields, types, validators, etc.)

    'users'            // 🔹 Explicit MongoDB collection name (ensures Mongoose uses this exact name with no changes)
    //    - Useful when your DB already has a collection with a specific name (e.g. 'users')
    //    - Prevents auto-pluralization or lowercase transformation
);

// 📝 Best Practice:
// - Use PascalCase (capital first letter) for model variable name (`UsersModel`) to indicate it's a constructor-like object.
// - Export this model and reuse it wherever you need to create, read, update, or delete user documents.




module.exports = UsersModel;