function Hesapla()
{
	
			var parabirimleri=document.getElementsByName("doviz"); // name özelliği "doviz" olan checkboxları aldık. Bu değişken artık bir array oldu çünkü checkbox'lar aynı name'e sahip olduğu için hepsi burada sırayla tutuluyor
			var getir=document.getElementById("giris").value; // id'si "giris" olan input'a girilen değeri value ile bir değişkene atadık. 
			if(getir=="") // input'a değer girilmediyse mesaj veriyoruz
				alert("Lütfen Boş Alan Bırakmayınız")
			if(parabirimleri[0].checked) // array'in ilk elemanı yani dolar seçili ise 
			{
				if (getir>=0) // girilen değer 0'dan büyük ve eşitse 
				{
					var serbest = serbestKur.usdAl; // web servis'den gelen serbestKur objesinin usdAl isimli verisini alıyoruz.
					// bu değer dolar'ın tr para birimi karşılığındaki güncel değeri 
					var hesap= getir*serbest; // aldığımız değeri input'a girilen değer ile çarpıyoruz
					document.getElementById("sonuc").value=hesap;// ve sonucu "sonuc" id'sine sahip input'a basıyoruz
				}
				else // inputtaki değer geçersizse mesaj versin
					alert("Lütfen gerçek bir değer giriniz!");
			}
			else if(parabirimleri[1].checked) // yukarıda yapılan işlemlerin aynısını euro para birimi için de yapıyoruz
			{
				if (getir>=0)
				{
					var serbest = serbestKur.eurAl;
					var hesap= getir*serbest;
					document.getElementById("sonuc").value=hesap;
				}
				else
				{
					alert("Lütfen gerçek bir değer giriniz!");					
				}
			}
			else
			{
				alert("Lütfen boş alan bırakmayınız.");
			}
			
		}
		function Clean() // clean metodu sayfadaki tüm input elemanlarını temizler
		{
			document.getElementsByTagName("input").value="";
		}