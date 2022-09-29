function Validation() {
    this.kiemTraRong = function (value, id, mess) {
        if (value.trim() === '') {
            getEle(id).innerHTML = mess;
            getEle(id).style.display = 'inline-block';
            return false;
        } getEle(id).innerHTML = '';
        getEle(id).style.display = 'none';
        return true;
    }
    this.checkPosition = function (idSelect, id, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(id).innerHTML = '';
            getEle(id).style.display = 'none';
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = 'inline-block';
        return false;
    }
    this.checkLengthAccount = function (value, id, mess, min, max) {
        if (value.length >= min && value.length <= max) {
            getEle(id).innerHTML = '';
            getEle(id).style.display = 'none';
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = 'inline-block';
        return false;
    }
    this.check = function (condition, value, id, mess) {
        var letter = condition;
        if (value.match(letter)) {
            getEle(id).innerHTML = '';
            getEle(id).style.display = 'none';
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = 'inline-block';
        return false;
    }
    this.saLary = function (value, id, mess, min, max) {
        if (value >= min && value <= max) {
            getEle(id).innerHTML = '';
            getEle(id).style.display = 'none';
            return true;
        } getEle(id).innerHTML = mess;
        getEle(id).style.display = 'inline-block';
        return false;
    }
}
