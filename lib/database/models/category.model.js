const { Schema, model, models } = mongoose;

// Define the schema for the category
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

// Check if the model already exists, otherwise create it
const Category = models.Category || model("Category", CategorySchema);

module.exports = Category;
