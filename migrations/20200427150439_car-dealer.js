
// VIN, make, model, and mileage are required. Transmission and title(clean, salvage, etc) are not always known


// The change we want to make to our schema

exports.up = async function (knex) {
    await knex.schema.createTable('cars', table => {
        table.increments("id"); // creates a primary key called id
        table.text("VIN", 17).notNullable().unique(); // creates a text field called VIN which is both required and unique
        table.text("make").notNullable();
        table.text("model").notNullable();
        table.integer("mileage").notNullable(); // creates a numeric field called mileage which is required
        table.text("transmission");
        table.text("title_Status");

    })

};

// reverting the changes to our schema

exports.down = async function (knex) {
    // drops the entire table
    await knex.schema.dropTableIfExists("cars")
};

