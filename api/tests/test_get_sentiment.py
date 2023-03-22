from unittest.mock import patch
from lib.get_sentiment import *

@patch('requests.get')

def test_get_sentiment(mock_request):
  mock_response = {
    'neg': 0.0, 
    'neu': 0.295, 
    'pos': 0.705, 
    'compound': 0.8012
  }
  mock_request.return_value.status_code = 200
  mock_request.return_value.json.return_value = mock_response

  sentiment_score = get_sentiment('I have had a lovely day')
  assert sentiment_score == {'compound': 0.8012}