"""
Todo application backend.

This Flask application provides a simple RESTful API to manage tasks.
Each task has an `id`, a `description` and a `done` status. The API
supports CRUD operations. A minimal frontend is served from the
`templates` and `static` directories.
"""

from pathlib import Path
from typing import List, Dict

from flask import Flask, jsonify, request, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, template_folder="templates", static_folder="static")

# Configure the SQLite database
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///tasks.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Task(db.Model):
    """Database model for a task."""
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(120), nullable=False)
    done = db.Column(db.Boolean, default=False)

    def to_dict(self) -> Dict[str, str]:
        return {
            "id": self.id,
            "description": self.description,
            "done": self.done,
        }


@app.before_first_request
def create_tables() -> None:
    """Create database tables if they do not exist."""
    db.create_all()


@app.route("/")
def index() -> str:
    """Serve the frontend page."""
    return render_template("index.html")


@app.route("/api/tasks", methods=["GET"])
def get_tasks() -> Dict[str, List[Dict[str, str]]]:
    """Return all tasks."""
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks])


@app.route("/api/tasks", methods=["POST"])
def add_task() -> Dict[str, str]:
    """Create a new task from JSON payload."""
    data = request.get_json()
    if not data or "description" not in data:
        return jsonify({"error": "Missing task description"}), 400
    task = Task(description=data["description"])
    db.session.add(task)
    db.session.commit()
    return jsonify(task.to_dict()), 201


@app.route("/api/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id: int):
    """Update an existing task."""
    task = Task.query.get_or_404(task_id)
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    if "description" in data:
        task.description = data["description"]
    if "done" in data:
        task.done = bool(data["done"])
    db.session.commit()
    return jsonify(task.to_dict())


@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id: int):
    """Delete a task."""
    task = Task.query.get_or_404(task_id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"result": True})


if __name__ == "__main__":
    app.run(debug=True)
