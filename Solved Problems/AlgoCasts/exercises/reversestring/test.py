import unittest
from index import reverse

class TestReverse(unittest.TestCase):
    def test_reverse(self):
        self.assertEqual(reverse(''), '')
        self.assertEqual(reverse('abcd'), 'dcba')
        self.assertEqual(reverse('  abcd'), 'dcba  ')

    def test_types(self):
        self.assertRaises(TypeError, reverse, 6)
        self.assertRaises(TypeError, reverse, None)
        self.assertRaises(TypeError, reverse, ["hello"])
