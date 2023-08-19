document.addEventListener("DOMContentLoaded", function () {
    $(".slideshow").slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    const allQuantityValues = document.querySelectorAll(".quantity-value");
    const orderButtons = document.querySelectorAll(".order-button");
    const orderFormModal = document.getElementById("orderFormModal");
    const closeFormButton = orderFormModal.querySelector(".close-form");
    const orderForm = document.getElementById("order-form");
    const okButton = document.getElementById("ok-button");
    const cancelButton = document.getElementById("cancel-button");
    const orderPolicyModal = document.getElementById("orderPolicyModal");

    allQuantityValues.forEach(function (quantityValue) {
        const plusButton = quantityValue.parentElement.querySelector(".plus-button");
        const minusButton = quantityValue.parentElement.querySelector(".minus-button");

        
    });

    orderButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            orderFormModal.style.display = "block";
        });
    });

    closeFormButton.addEventListener("click", function () {
        orderFormModal.style.display = "none";
    });

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

    const policyButtons = document.querySelectorAll(".policy-button");

    policyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            orderPolicyModal.style.display = "block";
        });
    });

    });

    updateTotalPrice();


// script.js
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


