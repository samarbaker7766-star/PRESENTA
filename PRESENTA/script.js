
const slides = document.querySelectorAll(".slide");

const previousButton = document.getElementById("previous-slide");
const nextButton = document.getElementById("next-slide");

const slideNumber = document.getElementById("slide-number");
const progressFill = document.getElementById("progress-fill");

const presentation = document.getElementById("presentation");

let currentSlide = 0;


// عرض الشريحة المطلوبة
function showSlide(index) {

    if (index < 0 || index >= slides.length) {
        return;
    }

    currentSlide = index;

    // إخفاء جميع الشرائح
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    // إظهار الشريحة المطلوبة
    slides[currentSlide].classList.add("active");

    // تحديث رقم الشريحة
    slideNumber.textContent =
        (currentSlide + 1) + " / " + slides.length;

    // تحديث شريط التقدم
    let progress =
        ((currentSlide + 1) / slides.length) * 100;

    progressFill.style.width = progress + "%";

    // التحكم في الأزرار
    previousButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;

}


// الانتقال إلى الشريحة التالية
nextButton.addEventListener("click", function() {

    showSlide(currentSlide + 1);

});


// الرجوع إلى الشريحة السابقة
previousButton.addEventListener("click", function() {

    showSlide(currentSlide - 1);

});


// التنقل باستخدام لوحة المفاتيح
document.addEventListener("keydown", function(event) {

    // تجاهل لوحة المفاتيح عند الكتابة
    if (
        event.target.tagName === "INPUT" ||
        event.target.tagName === "TEXTAREA"
    ) {
        return;
    }

    // الشريحة التالية
    if (
        event.key === "ArrowLeft" ||
        event.key === "ArrowDown"
    ) {
        showSlide(currentSlide + 1);
    }

    // الشريحة السابقة
    if (
        event.key === "ArrowRight" ||
        event.key === "ArrowUp"
    ) {
        showSlide(currentSlide - 1);
    }

    // أول شريحة
    if (event.key === "Home") {
        showSlide(0);
    }

    // آخر شريحة
    if (event.key === "End") {
        showSlide(slides.length - 1);
    }

});


// بدء العرض عند الضغط على زر اكتشف العرض
document.querySelectorAll('a[href="#presentation"]').forEach(function(link) {

    link.addEventListener("click", function() {

        showSlide(0);

    });

});


// تشغيل الشريحة الأولى
showSlide(0);
