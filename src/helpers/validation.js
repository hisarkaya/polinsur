export const checkTcNum = function(value) {
  value = value.toString();
  var isEleven = /^[0-9]{11}$/.test(value);
  var totalX = 0;
  for (var i = 0; i < 10; i++) {
    totalX += Number(value.substr(i, 1));
  }
  var isRuleX = totalX % 10 == value.substr(10,1);
  var totalY1 = 0;
  var totalY2 = 0;
  for (var i = 0; i < 10; i+=2) {
    totalY1 += Number(value.substr(i, 1));
  }
  for (var i = 1; i < 10; i+=2) {
    totalY2 += Number(value.substr(i, 1));
  }
  var isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9,0);
  return isEleven && isRuleX && isRuleY;
};

export const checkTaxNo = function(taxno) {
    var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, v7 = 0, v8 = 0, v9 = 0,
    v11 = 0, v22 = 0, v33 = 0, v44 = 0, v55 = 0, v66 = 0, v77 = 0, v88 = 0, v99 = 0,
    lastDigit = 0, sum = 0;
    if (taxno.length == 10) {
        v1 = (Number(taxno.charAt(0)) + 9) % 10;
        v2 = (Number(taxno.charAt(1)) + 8) % 10;
        v3 = (Number(taxno.charAt(2)) + 7) % 10;
        v4 = (Number(taxno.charAt(3)) + 6) % 10;
        v5 = (Number(taxno.charAt(4)) + 5) % 10;
        v6 = (Number(taxno.charAt(5)) + 4) % 10;
        v7 = (Number(taxno.charAt(6)) + 3) % 10;
        v8 = (Number(taxno.charAt(7)) + 2) % 10;
        v9 = (Number(taxno.charAt(8)) + 1) % 10;
        lastDigit = Number(taxno.charAt(9));
        v11 = (v1 * 512) % 9;
        v22 = (v2 * 256) % 9;
        v33 = (v3 * 128) % 9;
        v44 = (v4 * 64) % 9;
        v55 = (v5 * 32) % 9;
        v66 = (v6 * 16) % 9;
        v77 = (v7 * 8) % 9;
        v88 = (v8 * 4) % 9;
        v99 = (v9 * 2) % 9;
        if (v1 != 0 && v11 == 0) {v11 = 9;}
        if (v2 != 0 && v22 == 0) {v22 = 9;}
        if (v3 != 0 && v33 == 0) {v33 = 9;}
        if (v4 != 0 && v44 == 0) {v44 = 9;}
        if (v5 != 0 && v55 == 0) {v55 = 9;}
        if (v6 != 0 && v66 == 0) {v66 = 9;}
        if (v7 != 0 && v77 == 0) {v77 = 9;}
        if (v8 != 0 && v88 == 0) {v88 = 9;}
        if (v9 != 0 && v99 == 0) {v99 = 9;}
        sum = v11 + v22 + v33 + v44 + v55 + v66 + v77 + v88 + v99;
        sum = (sum % 10 == 0) ? 0 : (10 - (sum % 10));
        return (sum == lastDigit) ? true : false;
    }
    return false;
};
