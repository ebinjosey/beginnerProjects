document.addEventListener("DOMContentLoaded", () => {
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");

    const units = [
        "meters", "kilometers", "grams", "kilograms", 
        "joules", "newtons", "liters", "milliliters", 
        "celsius", "fahrenheit", "seconds", "minutes", 
        "hours", "pascals", "atmospheres", "watts", 
        "horsepower"
    ];

    units.forEach(unit => {
        const option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        fromUnitSelect.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = unit;
        option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        toUnitSelect.appendChild(option2);
    });

    document.getElementById("convert").addEventListener("click", () => {
        const value = parseFloat(document.getElementById("value").value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;

        const conversionFactors = {
            meters: { meters: 1, kilometers: 0.001 },
            kilometers: { meters: 1000, kilometers: 1 },
            grams: { grams: 1, kilograms: 0.001 },
            kilograms: { grams: 1000, kilograms: 1 },
            joules: { joules: 1 },
            newtons: { newtons: 1 },
            liters: { liters: 1, milliliters: 1000 },
            milliliters: { milliliters: 1, liters: 0.001 },
            celsius: { celsius: 1, fahrenheit: (value) => (value * 9/5) + 32 },
            fahrenheit: { fahrenheit: 1, celsius: (value) => (value - 32) * 5/9 },
            seconds: { seconds: 1, minutes: 1/60, hours: 1/3600 },
            minutes: { minutes: 1, seconds: 60, hours: 1/60 },
            hours: { hours: 1, seconds: 3600, minutes: 60 },
            pascals: { pascals: 1, atmospheres: 9.869e-6 },
            atmospheres: { atmospheres: 1, pascals: 101325 },
            watts: { watts: 1, horsepower: 0.00134102 },
            horsepower: { horsepower: 1, watts: 745.7 }
        };

        let result;

        if (typeof conversionFactors[fromUnit][toUnit] === 'function') {
            result = conversionFactors[fromUnit][toUnit](value);
        } else if (conversionFactors[fromUnit][toUnit]) {
            result = value * conversionFactors[fromUnit][toUnit];
        } else {
            result = "Conversion not possible.";
        }

        document.getElementById("result").innerText = `Result: ${result}`;
    });
});
