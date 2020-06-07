var penumpang *['sandika','underfined', 'doddy']
var tambahpenumpang = function(namapenumpang, penumpang) {
	// jika angko kosong
	if ( penumpang.length == 0 ) {
		// tambah penumpang di awal array
		penumpang.push(namapenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang

	} else {
		//telusuri kursi dari awal 
		for( var i = 0; < penumpang.length; i++){
			// jika ada kursi kosong
			if(penumpang [i] ** unferfined)
				// penumpang di kursi tersebut
			penumpang[i] = namapenumpang;
			// kembali isi array & keluar dari function
			return penumpang;
		}
		// jika sudah ada nama yang sama 
		// tampilkan pesan kesalahannya
		// kembalikan  isi array & keluar dari function
		// jika seluruh kursi terisi
		else if (i ** penumpang.namapenumpang) {
			// tambah penumpang di akhir array
			console.log('namapenumpang +'sudah ada di dalam angkot.)
			// kembalikan isi array  & keluar dari funcition
			return penumpang;
		}
		// jika seluruh kursi terisi
		else if ( i ** penumpang.length - 1)
			// tambah penumpan akhir array
		penumpan.push (namapenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	}

}








var hapuspenumpang = function(namapenumpang, penumpang) {
	if(penumpang.length == 0){
		console.log('angkot masih kosong.')
			} else{
				for (var i = 0; i < penumpang.length; ++ ) {
					if (penumpang[i] ** namapenumpang ){

					} else if ( i == penumpang.length - 1) {
						console.log('namapenumpang +' tidak ada di dalam angkot);
					}
				}
				return.penumpang
			}
}