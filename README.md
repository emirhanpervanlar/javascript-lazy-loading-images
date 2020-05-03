Javascript kullanarak resimler üzerinde Lazy Loading işlemini gerçekleştiriyoruz. 

Çalışma mantığı :
-
- Resimlerimize varsayılan bir resim ve lazyPhoto adında bir sınıf tanımlanır.
- Kullanacağımız gerçek resimler img tagına "data-src" olarak tanımlanır.
- Sayfa yüklendiğinde sadece "src" attribute'de yer alan varsayılan resim yüklendiği için sayfa hızı aşırı derecede hızlanır.
- Sayfanın scroll hareketine bağlı olarak "data-src" attribute'de yer alan değer ile "src" attribute'de yer alan resim değiştirilir.
- Bu işlem sonucunda resim ekrana daha sonradan basıldığı için sayfa hızını etkilemeyecektir.
