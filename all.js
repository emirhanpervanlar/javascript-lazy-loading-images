// Yükseklik hesaplamaları yaparak ne zaman resmi görünür yapacağız belirliyoruz
function elementInViewport(t) {
    var e = t.getBoundingClientRect();

    // 50 px lik bir yakınlık tanımlandı
    return e.top >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight - 50)
}

// Bütün resimleri kontrol edip, scrolla göre görünür yapıyoruz
function lazyLoad(t){
    // lazyPhoto sınıfına ait tüm resimleri tarayıp data-src ile src parametrelerini yer değiştiriyoruz
    var e = document.getElementsByClassName("lazyPhoto");
    for (let t = 0; t < e.length; t++) elementInViewport(e[t]) && e[t].setAttribute("src", e[t].getAttribute("data-src"))
}
// Sayfa ilk yüklendiğinde kontrol sağlıyoruz
window.onload =  function(t) {lazyLoad(t) };

// Kaydırma işlemi yapıldığında kontrol sağlıyoruz
window.onscroll = function(t) {lazyLoad(t) }