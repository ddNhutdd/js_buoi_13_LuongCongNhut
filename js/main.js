function getEleById(id) {
    return document.getElementById(id);
}
/*
*/
getEleById('btnB1TinhLuong').onclick = function () {
    var luongMotNgay = 0;
    var soNgayLam = 0;
    var result = 0;
    luongMotNgay = Number(getEleById('inputB1LuongMotNgay').value);
    soNgayLam = Number(getEleById('inputB1SoNgayLam').value);
    result = luongMotNgay * soNgayLam;
    getEleById('alertB1Result').innerHTML = result.toLocaleString();
}
/*
*/
getEleById('btnB2TB').onclick = function () {
    var so1 = Number(getEleById('inputB2So1').value);
    var so2 = Number(getEleById('inputB2So2').value);
    var so3 = Number(getEleById('inputB2So3').value);
    var so4 = Number(getEleById('inputB2So4').value);
    var so5 = Number(getEleById('inputB2So5').value);
    var result = (so1 + so2 + so3 + so4 + so5) / 5;
    getEleById('alertB2Result').innerHTML = result.toLocaleString();
}
/*
*/
getEleById('btnB3Tinh').onclick = function () {
    var soDollar = Number(getEleById('inputB3SoUsd').value);
    var result = soDollar * 23500;
    getEleById('alertB3Result').innerHTML = result.toLocaleString();
}
getEleById('btnB4Tinh').onclick = function () {
    var width = Number(getEleById('inputB4ChieuDai').value)
    var height = Number(getEleById('inputB4ChieuRong').value)
    var area = width * height;
    var circumference = (width + height) * 2;
    getEleById('alertB4Result').innerHTML = 'diện tích là ' + area.toLocaleString() + ' và chu vi là ' + circumference.toLocaleString();
}
getEleById('btnB5Tinh').onclick = function () {
    var num = Number(getEleById('inputB5So').value)
    var dozens = 0;
    var unit = 0;
    unit = num % 10;
    dozens = (num - unit) / 10;
    var result = unit + dozens;
    getEleById('alertB5Result').innerHTML = result.toLocaleString();
}