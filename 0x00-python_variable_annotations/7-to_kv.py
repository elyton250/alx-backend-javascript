#!/usr/bin/env python3
from typing import Union, Tuple
"""This module defines a function to create a
tuple with a key and its squared value."""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple containing the key and the square of the value."""
    return (k, v**2)
