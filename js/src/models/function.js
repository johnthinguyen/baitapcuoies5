//function
function getEle(id) {
    return document.getElementById(id);
}
//getinfo
function layThongTinNV() {
    var taiKhoan = getEle('tknv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var passWord = getEle('password').value;
    var ngayThang = getEle('datepicker').value;
    var luongCB = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;
    // 
    var isValid = true;
    //check validation
    //tai khoai check
    isValid &= validation.kiemTraRong(taiKhoan, 'tbTKNV', '(*)Tài khỏan không được để rỗng')
        && validation.checkLengthAccount(taiKhoan, 'tbTKNV', 'tài khoản 4-6 kí số', 4, 6);


    // namecheck
    isValid &= validation.kiemTraRong(hoTen, 'tbTen', '(*)Bạn không có họ tên hả hay sao mà không điền?')
        && validation.check("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$", hoTen, 'tbTen', '(*) Tên bằng số được hả');;



    //email check
    isValid &= validation.kiemTraRong(email, 'tbEmail', '(*)Người tối cổ hay sao mà không có email?')
        && validation.check('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/', email, 'tbEmail', '(*)Vui lòng nhập email hợp lệ');



    //pass check
    isValid &= validation.kiemTraRong(passWord, 'tbMatKhau', '(*)Muốn bị hack hay gì mà không điền pass?')
        && validation.check('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/', passWord, 'tbMatKhau', '(*)Vui lòng nhập đúng mật khẩu')
        && validation.checkLengthAccount(passWord, 'tbMatKhau', '(*)Mật khẩu từ 6-10 kí tự', 6, 10);



    // salary check
    isValid &= validation.kiemTraRong(luongCB, 'tbLuongCB', '(*)Tính làm không lương à?')
        && validation.saLary(luongCB, 'tbLuongCB', '(*)Lương cơ bản 1 triệu đến 20 triệu', 1000000, 20000000);


    isValid &= validation.kiemTraRong(gioLam, 'tbGiolam', '(*)Làm bao nhiêu tiếng thì điền vào hộ?') && validation.saLary(gioLam, 'tbGiolam', '(*)số giờ làm 80-200 giờ', 80, 200);


    isValid &= validation.kiemTraRong(ngayThang, 'tbNgay', '(*)Vui lòng nhập ngày tháng?');


    isValid &= validation.checkPosition('chucvu', 'tbChucVu', 'Chức vụ của bạn là gì thế?');

    if (isValid) {
        // object nhan vien
        var nv = new NhanVien(taiKhoan, passWord, hoTen, email, ngayThang, luongCB, chucVu, gioLam);
        nv.tongLuong();
        nv.xepLoai();
        return nv;
    }
    return null;

}



//render function
function render(data) {
    var content = ``;
    data.forEach(function (nv) {
        content += `
        <tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.hoTen}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayThang}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.xepLoai}</td>
            <td>
            <button class="btn btn-primary" onclick="editSV('${nv.taiKhoan}')" data-toggle="modal" data-target="#myModal"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-success m-2"  onclick="deleteSV('${nv.taiKhoan}')"><i class="fa-solid fa-trash"></i></button>
        </td>
        </tr>`
    })
    getEle('tableDanhSach').innerHTML = content;
}




//storage
function setLocalStorage() {
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem('DSNV', dataString)
}
function getLocalStorage() {
    if (localStorage.getItem('DSNV')) {
        var dataString = localStorage.getItem('DSNV');
        dsnv.arr = JSON.parse(dataString);
        render(dsnv.arr);
    }
}