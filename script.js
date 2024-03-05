// // var let const
// var myName = "Tegar";
// var userInput = prompt('siapa namamu?');
// alert(`nama saya ${userInput}`)
// alert("nama saya " + userInput)

// var nama = 'Tegar'
// nama = 'Dobleh'
// nama = 'Nadila'
// alert(nama)

// var n = Math.random()
// n = n * 6
// n = Math.floor(n) + 1
// console.log(n)

// // var n = Math.random()
// // n = n * 6
// // n = Math.floor(n) + 1
// // console.log(n)

// prompt('Siapa nama mu ?')
// prompt('Masuk universitas gak ?')
// // kalau jawabanmy Mau, maka keluarkan persen
// // maka keluarkan persen akan masuk ke jawabanya

// var chanceGetUniv = Math.random() * 100
// chanceGetUniv = Math.floor(chanceGetUniv)
// console.log(chanceGetUniv)
// alert('kemugkinan Kamu masuk univ adalah ' + chanceGetUniv)

// prompt('Siapa nama mu ?')
// var studentWish = prompt('Masuk universitas gak ?')

// if(studentWish === "Mau")
// {
//     var chanceGetUniv = Math.random() * 100
//     chanceGetUniv = Math.floor(chanceGetUniv)
//     console.log(chanceGetUniv)
//     alert('kemugkinan Kamu masuk univ adalah ' + chanceGetUniv)
// } else {
//     alert('okedeh goodluck')
// }

prompt('Siapa nama mu ?');
var studentWish = prompt('Mau masuk tidak ??');

if(studentWish == 'mau'){
    var nilai = prompt('Berapa nilai akhir kamu SMA ?')
    nilai =parseInt(nilai)
    var chanceGetUniv = Math.random() * 100
    chanceGetUniv = Math.floor(chanceGetUniv)
    if (nilai < 30){
        alert('Kamu tidak mungkin masuk');
    } 
    else{
        var chanceGetUniv = Math.random() * 100
        if (nilai < 50) {
            if(nilai < 50){
            alert("Kemungkinan kamu kecil masuk univ: " + nilai +'%');
            }
            else{
                alert("kemungkinan kamau masih bisa masuk univ" + nilai + '%')
            }
        } 
        
        else if (nilai >= 60 && nilai <= 70){
            alert('Kamu pasti bisa masuk UNIVy yakin deh: ' + nilai + '%');
        } 
        else if(nilai > 70 && nilai > 80){
                alert('Kamu sangat bisa masuk UNIV: ' + nilai  + '%');
            }
        }
    }
    else{
        alert('okdedeh goodluck')
    }
    // else if (nilai >= 50 && nilai <= 60) {
    //     if (chanceGetUniv > 70) {
    //         alert('Kamu pasti bisa masuk UNIV: ' + chanceGetUniv + '%');
    //     } 
    //     else {
    //         alert('Kamu memiliki kemungkinan masuk UNIV: ' + chanceGetUniv + '%');
    //     }
    // }













// prompt('Siapa nama mu ?')
// // var studentWish = prompt('Masuk universitas gak ?')
// var nilai = prompt('Berapa nilai SMA mu ?');
// nilai = parseInt(nilai); 

// if(nilai > 80)
// {
//     var chanceGetUniv = Math.random() * 100
//     chanceGetUniv = Math.floor(chanceGetUniv)
//     console.log(chanceGetUniv)
//     alert('kemugnkinan kamu masuk univ adalah ' + nilai + '%')
//     alert('kemugkinan Kamu masuk univ adalah ' + chanceGetUniv + '%')
// } else {
//     alert('mohon maaf anda tidak lolos karena nilai kamu tidak lebih dari 80!')
// }
  


// prompt('berapa nilai SMA mu ?')
// jika nilai dari user diatas 80
// kemugkinan masuk universitas diatas 80%
