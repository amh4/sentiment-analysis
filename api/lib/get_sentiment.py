from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
import json
from flask import Flask
from flask_cors import CORS



app = Flask(__name__)
CORS(app, origins=['https://sentiment-analysis-three.vercel.app/'])

@app.route('/get_sentiment/<string:sentence>')
def get_sentiment(sentence):
  sia = SentimentIntensityAnalyzer()
  scores = sia.polarity_scores(sentence)
  print(json.dumps(scores))
  return json.dumps(scores)

if __name__ == '__main__':
    app.run(debug=True)