document.getElementById("tinhTien").onclick = function () {
  var inputEle = document.getElementById("tongTien");
  var inputValue = Number(inputEle.value);
  var inputType = document.getElementById("select").value;
  var inputPeople = Number(document.getElementById("soNguoi").value);
  var ketQuaElement = document.getElementById("ketQua"); // Lấy phần tử để hiển thị kết quả

  // Kiểm tra xem các input đã được điền đầy đủ và đúng kiểu dữ liệu hay chưa
  if (
    isNaN(inputValue) ||
    isNaN(inputPeople) ||
    inputValue <= 0 ||
    inputPeople <= 0
  ) {
    alert("Vui lòng nhập số tiền và số người hợp lệ.");
    ketQuaElement.innerText = ""; // Xóa kết quả nếu có
    return;
  }
  switch (inputType) {
    case "1":
      var outputValue = (inputValue + (inputValue * 30) / 100) / inputPeople;
      ketQuaElement.innerText =
        "Tiền tip mỗi người là: " + "$" + outputValue.toFixed(2); // Hiển thị kết quả với hai chữ số sau dấu thập phân
      break;
    case "2":
      var outputValue = (inputValue + (inputValue * 20) / 100) / inputPeople;
      ketQuaElement.innerText =
        "Tiền tip mỗi người là: " + "$" + outputValue.toFixed(2);
      break;
    case "3":
      var outputValue = (inputValue + (inputValue * 15) / 100) / inputPeople;
      ketQuaElement.innerText =
        "Tiền tip mỗi người là: " + "$" + outputValue.toFixed(2);
      break;
    case "4":
      var outputValue = (inputValue + (inputValue * 10) / 100) / inputPeople;
      ketQuaElement.innerText =
        "Tiền tip mỗi người là: " + "$" + outputValue.toFixed(2);
      break;
    case "5":
      var outputValue = (inputValue + (inputValue * 5) / 100) / inputPeople;
      ketQuaElement.innerText =
        "Tiền tip mỗi người là: " + "$" + outputValue.toFixed(2);
      break;
    default:
      alert("Vui lòng chọn phần trăm tip.");
      ketQuaElement.innerText = ""; // Xóa kết quả nếu có
      break;
  }
};
