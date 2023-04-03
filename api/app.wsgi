from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
import os
import sys

nltk_data_dir = os.path.join(os.path.dirname(__file__), 'nltk_data')
nltk.download('vader_lexicon', download_dir=nltk_data_dir)
os.environ['NLTK_DATA'] = nltk_data_dir

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))
from lib.get_sentiment import get_sentiment

def application(environ, start_response):
    if environ['REQUEST_METHOD'] != 'GET':
        start_response('405 METHOD NOT ALLOWED', [('Content-Type', 'text/plain')])
        return [b'Method not allowed.']
    elif environ['PATH_INFO'] == '/get_sentiment/':
        start_response('400 BAD REQUEST', [('Content-Type', 'text/plain')])
        return [b'Missing sentence parameter.']
    elif environ['PATH_INFO'].startswith('/get_sentiment/'):
        sentence = environ['PATH_INFO'][15:]
        status = '200 OK'
        headers = [('Content-type', 'application/json')]
        response = {'sentence': sentence, 'sentiment': get_sentiment(sentence)}
        start_response(status, headers)
        return [json.dumps(response).encode('utf-8')]
    else:
        start_response('404 NOT FOUND', [('Content-Type', 'text/plain')])
        return [b'Page not found.']
