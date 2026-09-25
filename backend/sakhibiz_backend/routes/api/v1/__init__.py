# API v1 – import all route modules so Flask registers them
from sakhibiz_backend.routes.api.v1 import auth  # noqa: F401
from sakhibiz_backend.routes.api.v1 import schemes  # noqa: F401

