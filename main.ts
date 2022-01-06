huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isLearned(huskylens.readArrow_s(Content4.ID))) {
            basic.showString("Hello!")
        } else {
            basic.showString("Get out")
        }
    }
})
