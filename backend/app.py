from sakhibiz_backend import app, db
import sakhibiz_backend.models  # noqa: F401 – ensures models are registered

# Create all tables if they don't exist yet
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)