from flask import Flask, render_template, request, jsonify

app = Flask(__name__, template_folder='.', static_folder='static')

@app.route('/')
def home():
    return render_template('index.html.txt')

@app.route('/api/alerta', methods=['POST'])
def alerta():
    datos = request.json
    print(f"Alerta recibida: {datos.get('accion')}")
    return jsonify({"status": "recibido"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
