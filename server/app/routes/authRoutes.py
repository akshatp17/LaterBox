from flask import Blueprint, jsonify, redirect, url_for, current_app, request
from authlib.integrations.flask_client import OAuth
from app.models.userModel import User
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)

auth_bp = Blueprint("auth", __name__)
oauth = OAuth()

# User Login
@auth_bp.route("/login",methods=["POST"])
def login():
    request_data = request.get_json()
    is_google = request_data.get("is_google")

    # Handle Google login logic here
    if is_google:
        token = create_access_token(identity=email)
        return jsonify({"message": "Google login endpoint"}), 200
    
    # Handle regular login logic here
    else:
        email = request_data.get("email")
        password = request_data.get("password")
        
        user = User.objects(email=email).first()
        if user and user.password == password:
            token = create_access_token(identity=email)
            return jsonify({"message": "Login successful","token":token}), 200
        else:
            return jsonify({"message": "Invalid credentials"}), 401

# User Register
@auth_bp.route("/register", methods=["POST"])
def register():
    request_data = request.get_json()
    is_google = request_data.get("is_google")
    
    # Handle Google registration logic here
    if is_google:
        return jsonify({"message": "Google registration endpoint"}), 200

    # Handle regular registration logic here
    else:
        email = request_data.get("email")
        password = request_data.get("password")
        name = request_data.get("name")
        username = request_data.get("username")
        profile_picture = request_data.get("profile_picture","")
        is_paid = request_data.get("is_paid", "false")

        if User.objects(email=email).first():
            return jsonify({"message": "Email already exists"}), 400
        
        if User.objects(username=username).first():
            return jsonify({"message": "Username already exists"}), 400
        
        user = User(
            email=email,
            password=password,
            name=name,
            username=username,
            is_google="false",
            is_paid=is_paid,
            profile_picture=profile_picture,
        )
        user.save()
        token = create_access_token(identity=email)
        return jsonify({
            "message": "User registered successfully",
            "token": token,
            "user": user.to_mongo().to_dict()
            }), 201

def register_google_oauth(app, oauth):
    oauth.init_app(app)
    oauth.register(
        name="google",
        client_id=app.config["GOOGLE_CLIENT_ID"],
        client_secret=app.config["GOOGLE_CLIENT_SECRET"],
        server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
        client_kwargs={"scope": "openid email profile"},
    )