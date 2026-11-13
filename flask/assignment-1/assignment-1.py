from flask import Flask

app = Flask(__name__)
@app.route("/prime_number/<text>")
def prime(text):
    number = int(text)
    twice = 0
    for i in range(1, number+1):
        if number % i == 0:
            twice += 1
    if twice == 2:
        isprime = True

    response = {
        "Number": number, 
        "isPrime": isprime
    }
    return response

if __name__ == ("__main__"):
    app.run(host="127.0.0.1", port=3000, use_reloader=True)
