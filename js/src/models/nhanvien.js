function NhanVien(_taiKhoan, _matKhau, _hoTen, _email, _ngayLam, _luongCB, _chucVu, _gioLam) {
    this.taiKhoan = _taiKhoan;
    this.matKhau = _matKhau;
    this.hoTen = _hoTen;
    this.email = _email;
    this.ngayThang = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = '';
    //method
    this.tongLuong = function () {
        this.tongLuong = this.luongCB * this.chucVu;
    }
    this.xepLoai = function () {
        if (this.gioLam >= 192) {
            this.xepLoai = 'xuat sac';
        } else if (this.gioLam >= 176) {
            this.xepLoai = 'gioi';
        } else if (this.gioLam >= 160) {
            this.xepLoai = "kha";
        } else {
            this.xepLoai = "trung binh";
        }
    }
}