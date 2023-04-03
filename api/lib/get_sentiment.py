from nltk.sentiment import SentimentIntensityAnalyzer
import nltk
import json
import os
from flask import Flask
from flask_cors import CORS

nltk_data_dir = os.path.join(os.path.dirname(__file__), 'nltk_data')
nltk.download('vader_lexicon', download_dir=nltk_data_dir)
os.environ['NLTK_DATA'] = nltk_data_dir

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
