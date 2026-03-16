export var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["PENDING"] = 0] = "PENDING";
    PaymentStatus[PaymentStatus["SUCCESS"] = 1] = "SUCCESS";
    PaymentStatus[PaymentStatus["FAILED"] = 2] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
