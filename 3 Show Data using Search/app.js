let mobiles_features = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
]

function search() {
    let showList = document.getElementById("showList");
    showList.innerHTML = ""

    let mobilesDropdown = document.getElementById("mobilesDropdown");
    console.log(mobilesDropdown);

    let selectedDropdown = mobilesDropdown.options[mobilesDropdown.selectedIndex].value;
    console.log(selectedDropdown);

    let userInput = document.getElementById('userInput').value.toLowerCase();
    console.log(userInput);

    let selectedData = mobiles_features.filter(obj => {
        // const value = obj[selectedDropdown].toLowerCase();
        // return value.includes(userInput)
        return obj[selectedDropdown].toLowerCase() === userInput;
    }) 

    if (selectedData.length === 0) {
        showList.innerHTML = "No data found"
    } else {
        selectedData.map(getSelectedData => {
            showList.innerHTML += `<div class="card mb-4" style="width: 18rem;">
                <div class="card-body">
                    <p class="card-text"> Brand: ${getSelectedData.brand} </p>
                    <p class="card-text"> Model: ${getSelectedData.model} </p>
                    <p class="card-text"> Price: ${getSelectedData.price} </p>
                    <p class="card-text"> Camera: ${getSelectedData.camera} </p>
                    <p class="card-text"> Ram: ${getSelectedData.ram} </p>
                    <p class="card-text"> Rom: ${getSelectedData.rom} </p>
                </div>
            </div>`
            // const mobileInfo = document.createElement("p");
            // mobileInfo.innerHTML = `Brand: ${getSelectedData.brand}, Model: ${getSelectedData.model}, Price: ${getSelectedData.price}, Camera: ${getSelectedData.camera}, RAM: ${getSelectedData.ram}, ROM: ${getSelectedData.rom}`;
            // showList.appendChild(mobileInfo);
        })
    }
    
}
