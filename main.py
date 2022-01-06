
huskylens.init_i2c()

def on_forever():
    huskylens.request()
    if huskylens.is_appear(0, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        pass
    elif False:
        pass
basic.forever(on_forever)
