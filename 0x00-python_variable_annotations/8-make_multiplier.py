#!/usr/bin/env python3
"""this is the module that do multiplier"""


def make_multiplier(m: float):
    """this is  a multiplier function"""
    def mul(n: float):
        """this is the multiplier"""
        return n * m
    return mul
