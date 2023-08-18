document.addEventListener("DOMContentLoaded", function () {
    // กำหนดการทำงานของสไลด์โชว์
    $(".slideshow").slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    
    const modal = document.getElementById("orderModal");
    const modalContent = modal.querySelector(".modal-content");
    const closeButton = modal.querySelector(".close");
    const orderButtons = document.querySelectorAll(".order-button");
    const closeModalButton = modalContent.querySelector("#closeModal");
    const menuToggle = document.querySelector(".menu-toggle");
    const topMenu = document.querySelector(".top-menu");
    
    // เลือกปุ่มสั่งซื้อทั้งหมด
    const policyButton = document.getElementById("policy-button");

    policyButton.addEventListener("click", function () {
        alert("คเพิ่มสินค้าลงตระกร้าเรียบร้อย");
    });

    // กำหนดการทำงานสำหรับแต่ละปุ่มสั่งซื้อ
    orderButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            modal.style.display = "block";
            const productName = button.parentElement.querySelector("h3").textContent;
            const productPrice = button.parentElement.querySelector("p").textContent;
            modalContent.innerHTML = `
                <h2>รายละเอียดการสั่งซื้อ</h2>
                <p>สินค้า: ${productName}</p>
                <p>ราคา: ${productPrice}</p>
                <button id="closeModal" class="order-button">ปิด</button>
            `;

            closeModalButton.addEventListener("click", function () {
                modal.style.display = "none";
            });
        });
    });


    // เพิ่มการทำงานสำหรับเมนู toggle

    menuToggle.addEventListener("click", function () {
        topMenu.classList.toggle("show");
    });
    
    /*function pluse(quantity){
        var counter = parseInt(document.getElementById(quantity).innerText);
            counter++;
            document.getElementById(quantity).innerText = counter;
            updateTotalPrice();
        }
    function minus(quantity){
        var counter = parseInt(document.getElementById(quantity).innerText);
        if (counter > 0){
            counter--;
            document.getElementById(quantity).innerText = counter;
            updateTotalPrice();
        }
    }

    // เพิ่มการทำงานสำหรับปุ่มเพิ่มและลดจำนวนสินค้า
    /*const quantityValues = document.querySelectorAll(".quantity-value");

    quantityValues.forEach(function (quantityValue) {
        const minusButton = quantityValue.parentElement.querySelector(".minus-button");
        const plusButton = quantityValue.parentElement.querySelector(".plus-button");

        plusButton.addEventListener("click", function () {
            let currentQuantity = parseInt(quantityValue.textContent);
            currentQuantity++;
            quantityValue.textContent = currentQuantity;
            updateTotalPrice();
        });

        minusButton.addEventListener("click", function () {
            let currentQuantity = parseInt(quantityValue.textContent);
            if (currentQuantity > 0) {
                currentQuantity--;
                quantityValue.textContent = currentQuantity;
                updateTotalPrice();
            }
        });
    });*/

    // ฟังก์ชันคำนวณราคารวม
    function calculateTotalPrice() {
        const productCards = document.querySelectorAll(".product-card");
        let totalPrice = 0;

        productCards.forEach(function (productCard) {
            const quantityValue = parseInt(productCard.querySelector(".quantity-value").textContent);
            const price = parseInt(productCard.querySelector(".probth").textContent);

            if (!isNaN(quantityValue) && !isNaN(price)) {
                totalPrice += quantityValue * price;
            }
        });

        return totalPrice;
    }

    // อัพเดตราคารวม
    function updateTotalPrice() {
        const totalPriceValue = document.getElementById("total-price-value");
        const totalPrice = calculateTotalPrice();
        totalPriceValue.textContent = totalPrice;
    }

    // อัพเดตราคารวมเมื่อหน้าเว็บโหลดเสร็จสมบูรณ์
    updateTotalPrice();

    // เลือกแบบฟอร์มการสั่งซื้อ
    const orderFormModal = document.getElementById("orderFormModal");
    const closeFormButton = orderFormModal.querySelector(".close-form");
    const orderForm = document.getElementById("order-form");
    const okButton = document.getElementById("ok-button");
    const cancelButton = document.getElementById("cancel-button");

    // เลือกปุ่มสั่งซื้อทั้งหมดเพื่อเปิดแบบฟอร์ม
    orderButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            orderFormModal.style.display = "block";
        });
    });

    // ปิดแบบฟอร์มเมื่อคลิกที่ปุ่ม "X"
    closeFormButton.addEventListener("click", function () {
        orderFormModal.style.display = "none";
    });

    // ปิดแบบฟอร์มเมื่อคลิกที่พื้นหลัง
    window.addEventListener("click", function (event) {
        if (event.target === orderFormModal) {
            orderFormModal.style.display = "none";
        }
    });

    okButton.addEventListener("click", function () {
        if (orderForm.checkValidity()) {
            alert("ส่งรายละเอียดผู้ซื้อสำเร็จ!");
            orderForm.reset();
            orderFormModal.style.display = "none";
        } else {
            alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง");
        }
    });

    cancelButton.addEventListener("click", function () {
        orderForm.reset();
        orderFormModal.style.display = "none";
    });
});
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const countElement = document.getElementById("count");

let count = 0;

function updateCountDisplay() {
    countElement.textContent = count;
}

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCountDisplay();
    }
});

increaseBtn.addEventListener("click", () => {
    count++;
    updateCountDisplay();
});

updateCountDisplay();

