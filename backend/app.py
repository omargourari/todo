from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from pysondb import db

POSTGRES = {
    'user': 'postgres',
    'pw': 'password',
    'db': 'my_database',
    'host': 'localhost',
    'port': '5432',
}

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://%(user)s:%(pw)s@%(host)s:%(port)s/%(db)s' % POSTGRES
db.init_app(app)


CORS(app, resources={r"/*": {'origins': "*"}})

database = db.getDb("./database.json")
db = SQLAlchemy()


@app.route("/", methods=["GET", "POST"])
def api():
    if request.method == "POST":
        incoming_data = request.get_json()
        title = incoming_data["title"]
        desc = incoming_data["desc"]
        is_completed = incoming_data["isCompleted"]
        database.add({"title": title, "desc": desc, "completed": is_completed})
        # Since Python and JS handle large numbers differently. Therefore, trim down the id to just 6 digits so its the same on both
        task_id = database.getByQuery({"title": title})[0]["id"]
        database.updateByQuery({"title": title}, {"id": int(str(task_id)[:6])})
    return jsonify(database.getAll())


@app.route("/delete", methods=["GET", "POST"])
def delete_task():
    is_successful = False
    if request.method == "POST":
        incoming_data = request.get_json()
        task_to_delete = incoming_data["id"]
        database.deleteById(task_to_delete)
        is_successful = True
    return jsonify({"deleted": is_successful})


@app.route("/update", methods=["GET", "POST"])
def update_task():
    is_successful = False
    if request.method == "POST":
        incoming_data = request.get_json()
        id_to_update = incoming_data["id"]
        new_title = incoming_data["title"]
        new_desc = incoming_data["desc"]
        is_completed = incoming_data["isCompleted"]
        database.updateByQuery({"id": id_to_update},
                               {"title": new_title,
                                "desc": new_desc,
                                "completed": is_completed}
                               )
        is_successful = True
    return jsonify({"update": is_successful})


if __name__ == "__main__":
    app.run(debug=True)
