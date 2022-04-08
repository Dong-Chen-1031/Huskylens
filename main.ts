huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
radio.setGroup(4)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.readBox_s(Content3.ID) == 0) {
            basic.showIcon(IconNames.No)
            radio.sendValue("false", huskylens.readBox_s(Content3.ID))
        } else {
            basic.showIcon(IconNames.Yes)
            radio.sendValue("ture", huskylens.readBox_s(Content3.ID))
        }
    } else {
        basic.clearScreen()
    }
})
