import mixgoce
import blynklib
blynk = blynklib.Blynk('rTx8oz81HeMh1MunSp4XuYAyK3Zv0wC2', server='39.98.114.122', port=8080)

@blynk.handle_event("connect")
def connect_handler():
    print('Blynk connected')


@blynk.handle_event("disconnect")
def connect_handler():
    print('Blynk disconnected')

import blynktimer
blynk_timer = blynktimer.Timer(no_timers_err=False)

@blynk_timer.register(interval=1, run_once=False)
def blynk_timer0():
    blynk.virtual_write(2, mixgoce.get_temperature())



mixgoce.do_connect('Maker Space','20140811')
while True:
    blynk.run()
    blynk_timer.run()
