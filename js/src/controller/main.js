var dsnv = new DSNV();
var validation = new Validation();  
getLocalStorage();
// them nv
getEle('btnThemNV').onclick = function () {
    var nv = layThongTinNV();
    if (nv) {
        dsnv.themNv(nv);
        render(dsnv.arr);
        setLocalStorage();
    }
}
//xoa nv
function deleteSV(taiKhoan) {
    dsnv.xoaNv(taiKhoan);
    render(dsnv.arr);
    setLocalStorage();
}

//cap nhat sv
function editSV(taiKhoan) {
    var nv = dsnv.layThongTinNV(taiKhoan);
    if (nv) {
        getEle('tknv').value = nv.taiKhoan;
        getEle('tknv').disabled = true;
        getEle('name').value = nv.hoTen;
        getEle('email').value = nv.email;
        getEle('password').value = nv.matKhau;
        getEle('datepicker').value = nv.ngayThang;
        getEle('luongCB').value = nv.luongCB;
        getEle('chucvu').value = nv.chucVu;
        getEle('gioLam').value = nv.gioLam;
        getEle('btnCapNhat').style.display = 'inline-block';
        getEle('btnThemNV').style.display = 'none';

    }
}
getEle('btnCapNhat').addEventListener('click', function () {
    var nv = layThongTinNV();
    dsnv.capNhatNV(nv);
    render(dsnv.arr);
    setLocalStorage();
})

//searchname
getEle('searchName').addEventListener("keyup", function () {
    var keyword = getEle('searchName').value;
    var mangTiemKiem = dsnv.seachName(keyword);
    render(mangTiemKiem);
})


