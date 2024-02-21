function hitung() {
    const cm = document.getElementById("cm").value
    const DpiPpi = document.getElementById("ppi").value
    const hasilHitung = document.getElementById("hasilHitung")
    
    if (cm.trim() === '' || DpiPpi.trim() === '') {
        hasilHitung.innerHTML = "Masukkan Input terlebih dahulu!!"
    } else {
    const jumlahHitung = cm * (DpiPpi / 2.54)
    hasilHitung.innerHTML = "Jumlah pixel dari " + cm + " CM adalah : " + jumlahHitung.toFixed(2) + "pixel"
    }
}
