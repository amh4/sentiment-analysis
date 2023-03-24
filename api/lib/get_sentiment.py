from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
import json
from flask import Flask
from flask_cors import CORS

nltk.download('vader_lexicon')

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route('/get_sentiment/<string:sentence>')
def get_sentiment(sentence):
  sia = SentimentIntensityAnalyzer()
  scores = sia.polarity_scores(sentence)
  print(json.dumps(scores))
  return json.dumps(scores)

if __name__ == '__main__':
    app.run(debug=True)