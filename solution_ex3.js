const distanceKm = 10;
const isPeakHour = true;
const memberTier = "PLATINUM";

const baseFare = 12000;
const pricePerAdditionalKm = 4500;
const peakMultiplier = 1.2;

let initialFare = 0;
let operatingFee = 0;
let discountRate = 0;
let maxDiscount = 0;
let discount = 0;
let finalFare = 0;

if (distanceKm <= 0) {
  console.log("Quãng đường không hợp lệ.");
} else {
  if (distanceKm <= 2) {
    initialFare = baseFare;
  } else {
    initialFare = baseFare + (distanceKm - 2) * pricePerAdditionalKm;
  }

  if (isPeakHour) {
    operatingFee = initialFare * (peakMultiplier - 1);
    initialFare = initialFare * peakMultiplier;
  }

  switch (memberTier) {
    case "PLATINUM":
      discountRate = 0.15;
      maxDiscount = 30000;
      break;

    case "GOLD":
      discountRate = 0.10;
      maxDiscount = 20000;
      break;

    case "SILVER":
      discountRate = 0.05;
      maxDiscount = 10000;
      break;

    case "STANDARD":
    default:
      discountRate = 0;
      maxDiscount = 0;
      break;
  }

  discount = initialFare * discountRate;

  discount = discount > maxDiscount ? maxDiscount : discount;

  finalFare = initialFare - discount;

  finalFare = finalFare < baseFare ? baseFare : finalFare;

  console.log("========== HÓA ĐƠN GRABRIDE ==========");
  console.log("Khoảng cách:", distanceKm, "km");
  console.log("Hạng hội viên:", memberTier);
  console.log("Cước ban đầu:", initialFare, "VNĐ");
  console.log("Phụ phí giờ cao điểm:", operatingFee, "VNĐ");
  console.log("Mức giảm giá hội viên:", discount, "VNĐ");
  console.log("Cước thanh toán cuối cùng:", finalFare, "VNĐ");
  console.log("======================================");
}

