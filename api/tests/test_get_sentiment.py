import unittest
from unittest.mock import patch
from lib.get_sentiment import *

class TestSentimentAnalysis(unittest.TestCase):

  @patch('lib.get_sentiment.SentimentIntensityAnalyzer')
  def test_get_sentiment(self, mock_sia):
      mock_sia_instance = mock_sia.return_value
      mock_sia_instance.polarity_scores.return_value = {'compound': 0.5}
      
      sentence = "This is a test sentence"
      result = get_sentiment(sentence)
      
      mock_sia.assert_called_once_with()
      mock_sia_instance.polarity_scores.assert_called_once_with(sentence)
      self.assertEqual(result, '0.5')

  @patch('lib.get_sentiment.SentimentIntensityAnalyzer')
  def test_get_sentiment2(self, mock_sia):
      mock_sia_instance = mock_sia.return_value
      mock_sia_instance.polarity_scores.return_value = {'compound': 0.7}
      
      sentence = "This is a better test sentence"
      result = get_sentiment(sentence)
      
      mock_sia.assert_called_once_with()
      mock_sia_instance.polarity_scores.assert_called_once_with(sentence)
      self.assertEqual(result, '0.7')


