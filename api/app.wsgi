import os
import sys

sys.path.insert(0, os.path.abspath(os.path.dirname(__file__)))

def application(environ, start_response):
    if environ['PATH_INFO'] == '/get_sentiment/':
        start_response('404 NOT FOUND', [('Content-Type', 'text/plain')])
        return [b'Page not found.']
    elif environ['PATH_INFO'].startswith('/get_sentiment/'):
        sentence = environ['PATH_INFO'][15:]
        status = '200 OK'
        headers = [('Content-type', 'application/json')]
        start_response(status, headers)
        return [get_sentiment(sentence.encode('utf-8')).encode('utf-8')]
    else:
        start_response('404 NOT FOUND', [('Content-Type', 'text/plain')])
        return [b'Page not found.']