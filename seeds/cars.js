exports.seed = async function (knex) {
    await knex("cars").truncate()

    await knex("cars").insert([
        {
            VIN: "123456", make: "Honda",
            model: "Nsx", mileage: "110003",
        },
        {
            VIN: "234567543", make: "Audi",
            model: "A8", mileage: "32234",
        },
        {
            VIN: "254523525", make: "Toyota",
            model: "Supra", mileage: "102345",
        },
        {
            VIN: "54352345", make: "Suzuki",
            model: "GSX-R 600", mileage: "23456",
        },
        {
            VIN: "125243345", make: "Lamborghini",
            model: "Diablo", mileage: "3456",
        }
    ])
}