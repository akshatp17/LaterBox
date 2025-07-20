from flask_dance.contrib.google import make_google_blueprint
from config import Config

google_bp = make_google_blueprint(
    client_id=Config.GOOGLE_CLIENT_ID,
    client_secret=Config.GOOGLE_CLIENT_SECRET,
    redirect_to="main.google_login",
    scope=[
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        "openid",
    ]
)
