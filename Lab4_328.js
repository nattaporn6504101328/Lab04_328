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
});s
  

$(document).ready(function(){
    $('.slideshow').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });

    var policyModal = $('#orderPolicyModal');
    var closeModalButton = $('.close');

    // เปิด Modal และแสดงรายละเอียดเมื่อคลิกปุ่ม "รายละเอียด"
    window.openPolicyModal = function(productId) {
        policyModal.find('h2').text('รายละเอียดสินค้า');
        policyModal.find('.modal-content p').show();
        policyModal.find('.modal-content p:nth-child(' + productId + ')').show();
        policyModal.show();
    };

    // ปิด Modal เมื่อคลิกปุ่มปิด (x)
    closeModalButton.click(function(){
        policyModal.hide();
    });
});

function openPolicyModal(index) {
    $('.modal-content p').hide(); // ซ่อนรายละเอียดทั้งหมด
    $('.modal-content p:nth-child(' + index + ')').show(); // แสดงรายละเอียดตาม index
    $('#orderPolicyModal').css('display', 'block');
}

function closePolicyModal() {
    $('#orderPolicyModal').css('display', 'none');
}



$(document).ready(function(){
    var totalPriceValue = $('#total-price-value');
    var calculateTotalButton = $('#calculate-total-button');
    var productPrices = $('.probth'); // เลือกส่วนที่มีราคาสินค้า

    calculateTotalButton.click(function(){
        var total = 0;

        // วนลูปเพื่อนับราคาสินค้าทั้งหมด
        productPrices.each(function(){
            var price = parseInt($(this).text().replace(' BTH', ''));
            total += price;
        });

        totalPriceValue.text(total);
    });
});
$(document).ready(function(){
$('.product-card').each(function() {
    var countElement = $(this).find('.count');
    var increaseBtn = $(this).find('.increase');
    var decreaseBtn = $(this).find('.decrease');

    var count = 0; // จำนวนสินค้าเริ่มต้น

    // เพิ่มจำนวนสินค้าเมื่อคลิกปุ่มเพิ่ม
    increaseBtn.click(function(){
        count++;
        countElement.text(count);
    });

    // ลดจำนวนสินค้าเมื่อคลิกปุ่มลด
    decreaseBtn.click(function(){
        if (count > 0) {
            count--;
            countElement.text(count);
        }
    });
});
});
$(document).ready(function() {
var orderFormModal = $('#orderFormModal');
var closeModalButton = orderFormModal.find('.close-form');
var okButton = orderFormModal.find('#ok-button');
var cancelButton = orderFormModal.find('#cancel-button');
var orderForm = orderFormModal.find('#order-form');

// เปิดฟอร์มกรอกรายละเอียดผู้ซื้อเมื่อคลิกปุ่ม "สั่งซื้อ"
$('.order-button').click(function() {
    orderFormModal.show();
});

// ปิดฟอร์มเมื่อคลิกปุ่มปิด (x)
closeModalButton.click(function() {
    orderFormModal.hide();
});

// ปิดฟอร์มเมื่อคลิกปุ่ม Cancel
cancelButton.click(function() {
    orderFormModal.hide();
});

// ตรวจสอบและแสดงผลข้อมูลเมื่อคลิกปุ่ม OK
okButton.click(function() {
    var name = orderForm.find('#name').val();
    var email = orderForm.find('#email').val();
    var address = orderForm.find('#address').val();
    var telephoneNumber = orderForm.find('#telephone_number').val();

    if (name && email && address && telephoneNumber) {
        alert('บันทึกแบบฟอร์มสำเร็จ');
        orderFormModal.hide();
    } else {
        alert('กรุณากรอกข้อความให้ครบทุกช่อง');
    }
    });
});
function addToCart(productId) {
    var countElement = $('#count-' + productId);
    var currentCount = parseInt(countElement.text());

    currentCount++;
    countElement.text(currentCount);

    alert('เพิ่มสินค้าลงตระกร้าสำเร็จ');
}