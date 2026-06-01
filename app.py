from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    try:
        return render_template("index.html")
    except Exception as e:
        return f"""
        <h1>Template Error</h1>
        <p>{str(e)}</p>
        <p>Current folder: {os.getcwd()}</p>
        <p>Files: {os.listdir()}</p>
        <p>Templates folder exists: {os.path.exists('templates')}</p>
        """, 500

@app.route("/health")
def health():
    return {"status": "healthy"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
