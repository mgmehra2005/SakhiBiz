import json
import os
from sakhibiz_backend import db
from sakhibiz_backend.models.scheme import Scheme


def seed_schemes_if_empty():
    """Populates the schemes table from schemes.json if empty."""
    if Scheme.query.first() is not None:
        return  # Data already seeded

    # Locate schemes.json relative to sakhibiz_backend directory
    base_dir = os.path.dirname(__file__)
    json_path = os.path.join(base_dir, "temp_data", "schemes.json")

    if not os.path.exists(json_path):
        print(f"[Seed] Warning: schemes.json not found at {json_path}")
        return

    try:
        with open(json_path, "r", encoding="utf-8") as f:
            schemes_data = json.load(f)

        count = 0
        for item in schemes_data:
            # Map JSON fields (camelCase) to model fields (snake_case)
            scheme = Scheme(
                id=item.get("id"),
                name=item.get("name"),
                description=item.get("description"),
                introduced_by=item.get("introducedBy"),
                state_region=item.get("stateRegion"),
                urban_rural=item.get("urbanRural"),
                age_group=item.get("ageGroup"),
                category_preference=item.get("categoryPreference"),
                business_type=item.get("businessType"),
                other_eligibility=item.get("otherEligibility"),
                regional_variations=item.get("regionalVariations"),
                documents_required=item.get("documentsRequired") or item.get("documents_required") or [
                    "Aadhaar Card",
                    "PAN Card",
                    "Bank Account Details",
                    "Business Plan / Project Report",
                    "Passport size photographs"
                ],
                application_steps=item.get("applicationSteps") or item.get("application_steps") or [
                    "Check eligibility requirements",
                    "Gather required documents",
                    "Apply through designated portal or nearest partner bank branch",
                    "Track application status"
                ],
                official_link=item.get("officialLink") or item.get("official_link") or "https://www.myscheme.gov.in/"
            )
            db.session.add(scheme)
            count += 1

        db.session.commit()
        print(f"[Seed] Successfully seeded {count} schemes into SQLite database.")
    except Exception as e:
        db.session.rollback()
        print(f"[Seed] Error seeding schemes: {e}")


if __name__ == "__main__":
    from sakhibiz_backend import app
    with app.app_context():
        seed_schemes_if_empty()
