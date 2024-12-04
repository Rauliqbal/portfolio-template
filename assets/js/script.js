// Function Navbar 
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    var nav = this.document.querySelector('nav')
    nav.classList.toggle('sticky', this.window.scrollY > 0)
});

// Function Filtering Project
$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr("data-filter");

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $(".filter").show("1000");
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter")
                .not("." + value)
                .hide("3000");
            $(".filter")
                .filter("." + value)
                .show("3000");
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});


//  Function Contact
$("#noAdmin").val("089673102977");
$(".whatsapp-btn").click(function () {
    $("#whatsapp").toggleClass("toggle");
});
// Onclick Whatsapp Sent!
$("#whatsapp .submit").click(WhatsApp);
$("#whatsapp input, #whatsapp textarea").keypress(function () {
    if (event.which == 13) WhatsApp();
});
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function WhatsApp() {
    var ph = "";
    if ($("#whatsapp .nama").val() == "") {
        // Cek Nama
        ph = $("#whatsapp .nama").attr("placeholder");
        alert("Silahkan tulis " + ph);
        $("#whatsapp .nama").focus();
        return false;
    } else if ($("#whatsapp .nowhatsapp").val() == "") {
        // Cek Whatsapp
        ph = $("#whatsapp .nowhatsapp").attr("placeholder");
        alert("Silahkan tulis " + ph);
        $("#whatsapp .nowhatsapp").focus();
        return false;
    } else if ($("#whatsapp .pesan").val() == "") {
        // cek Pesan
        ph = $("#whatsapp .pesan").attr("placeholder");
        alert("Silahkan tulis " + ph);
        $("#whatsapp .pesan").focus();
        return false;
    } else {
        // Check Device (Mobile/Desktop)
        var url_wa = "https://web.whatsapp.com/send";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            url_wa = "whatsapp://send/";
        }
        // Get Value
        var tujuan = $("#whatsapp .tujuan").val(),
            via_url = location.href,
            nama = $("#whatsapp .nama").val(),
            nowhatsapp = $("#whatsapp .nowhatsapp").val(),
            pesan = $("#whatsapp .pesan").val();
        $(this).attr("href", url_wa + "?phone=62 " + tujuan + "&text=Nama: " + nama + " %0ANo. Whatsapp: " + nowhatsapp + "%0AMessage: " + pesan + " %0A%0Avia " + via_url);
        var w = 960,
            h = 540,
            left = Number(screen.width / 2 - w / 2),
            tops = Number(screen.height / 2 - h / 2),
            popupWindow = window.open(this.href, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=" + w + ", height=" + h + ", top=" + tops + ", left=" + left);
        popupWindow.focus();
        return false;
    }
}

