from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/get_combo', methods=['POST'])
def get_combo():
    data = request.get_json()
    component = data.get('component')
    # Dummy AI logic: In a real app, integrate an AI/ML model or API
    recommended = {
        'CPU': 'Intel i9-12900K',
        'GPU': 'NVIDIA RTX 3080',
        'RAM': '32GB DDR4',
        'Motherboard': 'ASUS ROG Maximus XIII',
        'Storage': '1TB NVMe SSD'
    }
    return jsonify({'component': component, 'combo': recommended})

if __name__ == '__main__':
    app.run(debug=True)
