while True:
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            # # # # #
            # # . . #
            # . # . #
            # . . # #
            # # # # #
            """)
    if input.button_is_pressed(Button.B):
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)