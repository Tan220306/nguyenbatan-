// ==========================================
// DANH SÁCH SẢN PHẨM
// ==========================================

const products = [

    {
        id: 1,
        name: "Mì Hảo Hảo",
        price: 5000,
        category: "food",
        amount: 20
    },

    {
        id: 2,
        name: "Coca-Cola",
        price: 10000,
        category: "drink",
        amount: 2
    },

    {
        id: 3,
        name: "Bánh Oreo",
        price: 18000,
        category: "snack",
        amount: 10
    },

    {
        id: 4,
        name: "Nước mắm Nam Ngư",
        price: 35000,
        category: "spice",
        amount: 0
    },

    {
        id: 5,
        name: "Sữa tươi",
        price: 32000,
        category: "drink",
        amount: 15
    }

];


// ==========================================
// 1. HIỂN THỊ TẤT CẢ SẢN PHẨM
// ==========================================

console.log("===== DANH SÁCH SẢN PHẨM =====");

for (const product of products) {

    console.log(
        `ID: ${product.id} | ${product.name} | ${product.price}đ | ${product.category} | Số lượng: ${product.amount}`
    );

}



// ==========================================
// 2. SẢN PHẨM CÒN HÀNG
// ==========================================

console.log("\n===== SẢN PHẨM CÒN HÀNG =====");

for (const product of products) {

    if (product.amount > 0) {

        console.log(product.name);

    }

}



// ==========================================
// 3. SẢN PHẨM HẾT HÀNG
// ==========================================

console.log("\n===== SẢN PHẨM HẾT HÀNG =====");

for (const product of products) {

    if (product.amount === 0) {

        console.log(product.name);

    }

}



// ==========================================
// 4. TỔNG SỐ LƯỢNG SẢN PHẨM
// ==========================================

let totalAmount = 0;

for (const product of products) {

    totalAmount =
        totalAmount + product.amount;

}


console.log("\n===== THỐNG KÊ =====");

console.log(
    "Tổng số lượng:",
    totalAmount
);



// ==========================================
// 5. TỔNG GIÁ TRỊ KHO
// ==========================================

let totalValue = 0;

for (const product of products) {

    totalValue =
        totalValue +
        product.price * product.amount;

}


console.log(
    "Tổng giá trị kho:",
    totalValue
);



// ==========================================
// 6. GIÁ TRUNG BÌNH
// ==========================================

let totalPrice = 0;

for (const product of products) {

    totalPrice =
        totalPrice + product.price;

}


let averagePrice =
    totalPrice / products.length;


console.log(
    "Giá trung bình:",
    averagePrice
);



// ==========================================
// 7. SẢN PHẨM GIÁ CAO NHẤT
// ==========================================

let mostExpensive = products[0];

for (const product of products) {

    if (
        product.price >
        mostExpensive.price
    ) {

        mostExpensive = product;

    }

}


console.log(
    "\n===== SẢN PHẨM ĐẮT NHẤT ====="
);


console.log(
    `${mostExpensive.name} - ${mostExpensive.price}đ`
);



// ==========================================
// 8. SẢN PHẨM CÓ SỐ LƯỢNG LỚN NHẤT
// ==========================================

let mostAmount = products[0];

for (const product of products) {

    if (
        product.amount >
        mostAmount.amount
    ) {

        mostAmount = product;

    }

}


console.log(
    "\n===== SẢN PHẨM CÓ SỐ LƯỢNG LỚN NHẤT ====="
);


console.log(
    `${mostAmount.name} - ${mostAmount.amount} sản phẩm`
);



// ==========================================
// 9. TÌM SẢN PHẨM ID = 3
// ==========================================

console.log(
    "\n===== TÌM THEO ID ====="
);


for (const product of products) {

    if (product.id === 3) {

        console.log(
            `${product.name} - ${product.price}đ - ${product.category} - ${product.amount}`
        );

    }

}



// ==========================================
// 10. TÌM THEO CATEGORY
// ==========================================

const category = "drink";

console.log(
    "\n===== CATEGORY: DRINK ====="
);


for (const product of products) {

    if (product.category === category) {

        console.log(product.name);

    }

}



// ==========================================
// 11. ĐẾM SỐ SẢN PHẨM THEO CATEGORY
// ==========================================

let food = 0;

let drink = 0;

let snack = 0;

let spice = 0;


for (const product of products) {

    if (
        product.category === "food"
    ) {

        food++;

    }

    else if (
        product.category === "drink"
    ) {

        drink++;

    }

    else if (
        product.category === "snack"
    ) {

        snack++;

    }

    else if (
        product.category === "spice"
    ) {

        spice++;

    }

}


console.log(
    "\n===== THỐNG KÊ CATEGORY ====="
);

console.log(
    "Food:",
    food
);

console.log(
    "Drink:",
    drink
);

console.log(
    "Snack:",
    snack
);

console.log(
    "Spice:",
    spice
);



// ==========================================
// 12. PHÂN LOẠI SẢN PHẨM THEO GIÁ
// ==========================================

console.log(
    "\n===== PHÂN LOẠI ====="
);


for (const product of products) {

    let type;


    if (product.price >= 30000) {

        type = "Cao cấp";

    }

    else if (product.price >= 10000) {

        type = "Trung bình";

    }

    else {

        type = "Giá rẻ";

    }


    console.log(
        `${product.name} → ${type}`
    );

}



// ==========================================
// HIỂN THỊ THỐNG KÊ LÊN WEBSITE
// ==========================================

const stats =
    document.getElementById("stats");


stats.innerHTML = `

    <div class="stat">

        <strong>
            Tổng số lượng
        </strong>

        <span>
            ${totalAmount} sản phẩm
        </span>

    </div>


    <div class="stat">

        <strong>
            Tổng giá trị kho
        </strong>

        <span>
            ${totalValue.toLocaleString("vi-VN")}đ
        </span>

    </div>


    <div class="stat">

        <strong>
            Giá trung bình
        </strong>

        <span>
            ${Math.round(averagePrice).toLocaleString("vi-VN")}đ
        </span>

    </div>


    <div class="stat">

        <strong>
            Đắt nhất
        </strong>

        <span>
            ${mostExpensive.name}
            -
            ${mostExpensive.price.toLocaleString("vi-VN")}đ
        </span>

    </div>


    <div class="stat">

        <strong>
            Nhiều hàng nhất
        </strong>

        <span>
            ${mostAmount.name}
            -
            ${mostAmount.amount}
            sản phẩm
        </span>

    </div>


    <div class="stat">

        <strong>
            Category: ${category}
        </strong>

        <span>
            Các sản phẩm thuộc category này
        </span>

    </div>

`;



// ==========================================
// NÚT MUA HÀNG
// ==========================================

const cartButtons =
    document.querySelectorAll(".add-cart");


let cartCount = 0;


for (const button of cartButtons) {

    button.addEventListener(
        "click",
        function () {

            cartCount++;


            const name =
                button.dataset.name;


            alert(
                `Đã thêm "${name}" vào giỏ hàng!\n\n` +
                `Số sản phẩm trong giỏ: ${cartCount}`
            );

        }
    );

}