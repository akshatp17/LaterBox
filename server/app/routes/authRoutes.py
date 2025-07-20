from flask import Blueprint, jsonify, redirect, url_for, current_app
from flask_login import login_user, logout_user
from authlib.integrations.flask_client import OAuth
from app.models.userModel import User


auth_bp = Blueprint("auth", __name__)
oauth = OAuth()  # ✅ Only declare here, init in __init__.py

# User Login
@auth_bp.route("/login",methods=["POST"])
def login():
    return jsonify({"message": "Login endpoint"}), 200

# User Register
@auth_bp.route("/register", methods=["POST"])
def register():
    return jsonify({"message": "Register endpoint"}), 200

def register_google_oauth(app, oauth):
    oauth.init_app(app)
    oauth.register(
        name="google",
        client_id=app.config["GOOGLE_CLIENT_ID"],
        client_secret=app.config["GOOGLE_CLIENT_SECRET"],
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
    )