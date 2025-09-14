# Todo App

This project is a minimal task manager. Users can create, update and
delete tasks via a RESTful API. A small frontend is included to
provide a simple interface.

## Setup

1. Ensure you have Python 3.8 or later installed.
2. Create a virtual environment and install dependencies:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

3. Run the application:

```bash
python app.py
```

4. Open your browser and navigate to `http://127.0.0.1:5000` to view
   the frontend.

## API Endpoints

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| `GET`  | `/api/tasks`    | List all tasks           |
| `POST` | `/api/tasks`    | Create a new task        |
| `PUT`  | `/api/tasks/<id>` | Update an existing task |
| `DELETE` | `/api/tasks/<id>` | Delete a task          |

## Project Structure

```
todo_app/
├── app.py            # Flask application and API definitions
├── requirements.txt  # Python dependencies
├── static/
│   ├── main.js       # Client‑side logic
│   └── styles.css    # Basic styling
└── templates/
    └── index.html    # Frontend page
```

## License

This project is licensed under the MIT License. See the root `LICENSE`
file for details.
