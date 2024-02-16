const form = document.getElementById('transaction-form');
const predictButton = document.getElementById('predict-button');

// function on clicking predict button

predictButton.addEventListener('click', () => {

    // form input data
    const formData = new FormData(form);

    // API request body data
    const bodyData = {
        "cc_num": parseInt(formData.get("ccn")),
        "amt": parseInt(formData.get("amt")),
        "hour": parseInt(formData.get("hot")),
        "age": parseInt(formData.get("age")),
        "category_food_dining": formData.get("pc") === "category_food_dining" ? 1 : 0,
        "category_gas_transport": formData.get("pc") === "category_gas_transport" ? 1 : 0,
        "category_grocery_net": formData.get("pc") === "category_grocery_net" ? 1 : 0,
        "category_grocery_pos": formData.get("pc") === "category_grocery_pos" ? 1 : 0,
        "category_health_fitness": formData.get("pc") === "category_health_fitness" ? 1 : 0,
        "category_home": formData.get("pc") === "category_home" ? 1 : 0,
        "category_kids_pets": formData.get("pc") === "category_kids_pets" ? 1 : 0,
        "category_misc_net": formData.get("pc") === "category_misc_net" ? 1 : 0,
        "category_misc_pos": formData.get("pc") === "category_misc_pos" ? 1 : 0,
        "category_personal_care": formData.get("pc") === "category_personal_care" ? 1 : 0,
        "category_shopping_net": formData.get("pc") === "category_shopping_net" ? 1 : 0,
        "category_shopping_pos": formData.get("pc") === "category_shopping_pos" ? 1 : 0,
        "category_travel": formData.get("pc") === "category_travel" ? 1 : 0,
        "gender_m": formData.get("male") === "1" ? 1 : 0,
        "day_Mon": formData.get("dot") === "day_Mon" ? 1 : 0,
        "day_Tue": formData.get("dot") === "day_Tue" ? 1 : 0,
        "day_Wed": formData.get("dot") === "day_Wed" ? 1 : 0,
        "day_Thu": formData.get("dot") === "day_Thu" ? 1 : 0,
        "day_Sat": formData.get("dot") === "day_Sat" ? 1 : 0,
        "day_Sun": formData.get("dot") === "day_Sun" ? 1 : 0,
        model: "LR"
    };
    console.log(bodyData);

    // API hit through frontend

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData)
    })
        .then(response => response.text())
        .then(data => {
            // Handling the API response here
            console.log(data);
            alert(data);
        })
        .catch(error => {
            console.error(error);
        });
});
