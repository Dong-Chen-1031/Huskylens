huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.readBox_s(Content3.ID) == 0) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
