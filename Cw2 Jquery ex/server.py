from flask import Flask, request, jsonify, render_template
import time

app=Flask(__name__)

@app.route("/")
def main():
	return render_template('index.html')

@app.route("/api/info")
def app_info():
	info={
	"ip":"127.0.0.1",
	"hostname":"everest",
	"description":"Main Server",
	"load":[3.21,7,14]
	}
	return jsonify(info)

@app.route("/api/calc")
def add():
	a=int(request.args.get('a',0))
	b=int(request.args.get('b',0))
	div='na'
	if b!=a:
		div=a/b
	return jsonify({
		"a":a,
		"b":b,
		"add":a+b,
		"subtract":a-b,
		"multiply":a*b,
		"divide":div
		})

if __name__ == "__main__":
	app.run(debug=True)
