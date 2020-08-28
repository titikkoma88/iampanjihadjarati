// event pada saat link di klik

$('.page-scroll').on('click', function() {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);

    //pindahkan scroll

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 10
    }, 1250, 'swing');

    e.preventDefault();

});

$('.nav-item').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');

});