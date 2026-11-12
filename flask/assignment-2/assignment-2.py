import json
from flask import Flask, Response

with open("dictionary.json", encoding="utf-8") as file:
    dictionary = json.load(file)

app = Flask(__name__)

@app.route("/translate/<text>")
def translate(text):
    if text in dictionary:
        return {
            "English": text,
            "Finnish": dictionary[text]
            }
    else:
        return {"error": "Word not found"}, 404

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "Invalid endpoint",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(response=json_response, status=404, mimetype="application/json")
    return http_response

@app.route("/words")
def show():
    return dictionary
        
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
