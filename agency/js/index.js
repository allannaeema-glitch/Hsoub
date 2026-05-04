document.addEventListener("DOMContentLoaded", function () {

  // ✅ Navbar scroll
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 200) {
      document.getElementById("navbar").classList.add("noTransparrent");
    } else {
      document.getElementById("navbar").classList.remove("noTransparrent");
    }
  });

  // ✅ CountUp (مع حماية من الأخطاء)
  if (typeof CountUp !== "undefined") {
    new CountUp('website-count', 0, 250).start();
    new CountUp('app-count', 0, 100).start();
    new CountUp('user-count', 0, 1000).start();
    new CountUp('video-count', 0, 30).start();
  }

  // ✅ Form Validation
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.classList.add('was-validated');
    });
  });

  // ✅ السنة (المشكلة عندك هنا غالبًا)
  const year = document.getElementById("fullYear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

});