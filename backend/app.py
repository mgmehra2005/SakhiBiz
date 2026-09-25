from sakhibiz_backend import app, db
import sakhibiz_backend.models  # noqa: F401 – ensures models are registered
from sakhibiz_backend.seed_schemes import seed_schemes_if_empty

# Create all tables if they don't exist yet and seed schemes if empty
with app.app_context():
    db.create_all()
    seed_schemes_if_empty()

if __name__ == "__main__":
    app.run(debug=True)