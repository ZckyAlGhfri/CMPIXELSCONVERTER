function hitungPixel() {
    const cm = document.getElementById("cm").value
    const DpiPpi = document.getElementById("ppi1").value
    const hasilHitung = document.getElementById("hasilHitung")
    
    if (cm.trim() === '' || DpiPpi.trim() === '') {
        hasilHitung.innerHTML = "Masukkan Input terlebih dahulu!!"
    } else {
    const jumlahHitung = cm * (DpiPpi / 2.54)
    hasilHitung.innerHTML = "Jumlah pixel dari " + cm + " CM adalah : " + jumlahHitung.toFixed(2) + "pixel"
}
}

function hitungCM() {
    const pixels = document.getElementById("pixels").value
    const DpiPpi = document.getElementById("ppi2").value
    const hasilHitung = document.getElementById("hasilHitung2")
    
    if (pixels.trim() === '' || DpiPpi.trim() === '') {
        hasilHitung.innerHTML = "Masukkan Input terlebuh dahulu!!"
    } else {
        const jumlahHitung = ( pixels * 2.54) / DpiPpi
        hasilHitung.innerHTML = "Jumlah CM dari " + pixels + " Pixels adalah : " + jumlahHitung.toFixed(2) + "CM"
    }
}

function hitungWHPixel() {
    const cm1 = document.getElementById("cm1").value
    const cm2 = document.getElementById("cm2").value
    const DpiPpi = document.getElementById("ppi1").value
    const hasilHitung = document.getElementById("hasilHitung1")
    
    if ( cm1.trim() === '' || cm2.trim() === '' || DpiPpi.trim() === '' ) {
        hasilHitung.innerHTML = "Masukkan Input terlebuh dahulu!!"
    } else {
        const jumlahHitung1 = cm1 * (DpiPpi / 2.54) 
        const jumlahHitung2 = cm2 * (DpiPpi / 2.54) 
        hasilHitung.innerHTML = "Jumlah " + cm1 + " CM X " + cm2 + " CM dalam Pixels adalah " + jumlahHitung1.toFixed(2) + "px X " + jumlahHitung2.toFixed(2) + "px"
    }
}

function hitungWHCM() {
    const pixels1 = document.getElementById("pixels1").value
    const pixels2 = document.getElementById("pixels2").value
    const DpiPpi = document.getElementById("ppi2").value
    const hasilHitung = document.getElementById("hasilHitung2")
    
    if ( pixels1.trim() === '' || pixels2.trim() === '' || DpiPpi.trim() === '' ) {
        hasilHitung.innerHTML = "Masukkan Input terlebuh dahulu!!"
    } else {
        const jumlahHitung1 = ( pixels1 * 2.54) / DpiPpi
        const jumlahHitung2 = ( pixels2 * 2.54) / DpiPpi
        hasilHitung.innerHTML = "Jumlah " + pixels1 + "px X " + pixels2 + "px dalam CM adalah " + jumlahHitung1.toFixed(2) + " CM X " + jumlahHitung2.toFixed(2) + " CM"
    }
}
