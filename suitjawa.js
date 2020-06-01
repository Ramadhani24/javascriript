// menangkap pilihan player
var p = prompt ('pilih : gajah semut orang');

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = math.random();
console.log(comp)

if ( comp < 0.34) {
	comp = 'gajah';

}else if (comp >= 0.34 && comp < 0.67) {
	comp = 'orang'
} else {
	comp = 'semut';
}

// menentukan rules
//if (p == comp ){
	//hasil = 'SERI';
//} else if (p == 'gajah'){
	//if ( comp == 'orang') {
		//hasil = 'MENANG '
	//}else
	//hasil = 'KALAH'
 hasil = ( comp == 'orang') ? 'MENANG' : 'KALAH';{
 }else if ( p == 'orang'){
 	hasil = ( comp == 'gajah') ? 'KALAH' : 'MENANG':
 } ELSE {
 	HASIL = 'Memasukan pilihan yang salah'
 }
// tampilkan hasilnya
alert ('kamu memilih :' + p + dan komputer memilih :' + comp +'\n maka hasilnya : kamu ' +)

tanya = confirm ('lagi?');

alert('terimakasih sudah bermain')