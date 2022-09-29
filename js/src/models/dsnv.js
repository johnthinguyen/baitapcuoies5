function DSNV() {
    this.arr = [];
    this.themNv = function (nv) {
        this.arr.push(nv);
    }
    this.timVitriNv = function (taiKhoan) {
        var index = -1;
        this.arr.forEach(function (nv, i) {
            if (nv.taiKhoan === taiKhoan) {
                index = i;
            }
        });
        return index;
    }
    this.xoaNv = function (taiKhoan) {
        var index = this.timVitriNv(taiKhoan);
        if (index !== -1) {
            this.arr.splice(index, 1)
        }
    }
    this.layThongTinNV = function (taiKhoan) {
        var index = this.timVitriNv(taiKhoan);
        if (index !== -1) {
            return this.arr[index]
        }
        return null;
    }
    this.capNhatNV = function (nv) {
        var index = this.timVitriNv(nv.taiKhoan);
        if (index !== -1) {
            this.arr[index] = nv;
        }
    }
    this.seachName = function (keyword) {
        var mangTiemKiem = [];
        this.arr.forEach(function (nv) {
            var xepLoai = nv.xepLoai.toLowerCase();
            var textSearch = keyword.toLowerCase();
            if (xepLoai.indexOf(textSearch) > -1) {
                mangTiemKiem.push(nv);
            }
        });
        return mangTiemKiem;
    }
}
