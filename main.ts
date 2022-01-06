huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        for (let index = 0; index <= 5; index++) {
            if (huskylens.isAppear(index + 1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
                if (huskylens.isLearned(index + 1)) {
                	
                } else {
                	
                }
            }
        }
    }
})
