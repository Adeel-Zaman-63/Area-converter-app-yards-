document.addEventListener("DOMContentLoaded", function () {
    const yardInput = document.getElementById("input-yard");
    const yardResult = document.getElementById("yard");
    const squareFeetResult = document.getElementById("square-feet");

    yardInput.addEventListener("input", function () {
        const yard = parseFloat(yardInput.value);
        const squareFeet = yard * 9; // Conversion factor for Yard to Square Feet

        yardResult.textContent = yard.toFixed(2);
        squareFeetResult.textContent = squareFeet.toFixed(2);
    });
});
