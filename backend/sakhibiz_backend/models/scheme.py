from sakhibiz_backend import db


class Scheme(db.Model):
    __tablename__ = "schemes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    introduced_by = db.Column(db.String(255), nullable=True)
    state_region = db.Column(db.String(255), nullable=True)
    urban_rural = db.Column(db.String(100), nullable=True)
    age_group = db.Column(db.String(100), nullable=True)
    category_preference = db.Column(db.String(255), nullable=True)
    business_type = db.Column(db.Text, nullable=True)
    other_eligibility = db.Column(db.Text, nullable=True)
    regional_variations = db.Column(db.Text, nullable=True)
    documents_required = db.Column(db.JSON, nullable=True, default=list)
    application_steps = db.Column(db.JSON, nullable=True, default=list)
    official_link = db.Column(db.String(500), nullable=True)

    def to_dict(self) -> dict:
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "introduced_by": self.introduced_by,
            "state_region": self.state_region,
            "urban_rural": self.urban_rural,
            "age_group": self.age_group,
            "category_preference": self.category_preference,
            "business_type": self.business_type,
            "other_eligibility": self.other_eligibility,
            "regional_variations": self.regional_variations,
            "documents_required": self.documents_required or [],
            "application_steps": self.application_steps or [],
            "official_link": self.official_link,
        }

    def __repr__(self):
        return f"<Scheme {self.id}: {self.name}>"
