from flask import Flask, request, jsonify, render_template
import time
app=Flask(__name__)
@app.route("/")
def main():
	return render_template('main.html')

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
	if b!=0:
		div=a/b
	return jsonify({
		"aa":a,
		"bb":b,
		"add":a+b,
		"subtract":a-b,
		"multiply":a*b,
		"divide":div
		})

if __name__ == "__main__":
	app.run(debug=True)