from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/airport/<icao>')
def airport(icao):
  # add database query here
  return {'ICAO': icao, 'Name': 'Airport name'}

if __name__ == "__main__":
  app.run(host='127.0.0.1', port='3000', use_reloader=(True))
