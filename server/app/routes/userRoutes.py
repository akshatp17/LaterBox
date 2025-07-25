from flask import Blueprint, jsonify, redirect, url_for, current_app, request
from app.models.userModel import User
from app.middlewares.checkToken import check_token_middleware

user_bp = Blueprint("user", __name__)

# Get Default User Profile
@user_bp.route("/profile", methods=["GET"])
@check_token_middleware
def get_default_profile():
    try:
        usermail = request.user_email
        if not usermail:
            return jsonify({"success":False,"message": "User Mail is required"}), 400
        
        user = User.objects(email=usermail).first()

        if not user:
            return jsonify({"success":False,"message": "User not found"}), 404
        
        user_data = {
            "email": user.email,
            "name": user.name,
            "username": user.username,
            "userId": str(user.id),
            "profile_picture": user.profile_picture,
            "is_paid": user.is_paid,
            "is_google": user.is_google,
        }
        return jsonify({"success":True,"user": user_data}), 200
    
    except Exception as e:
        current_app.logger.error(f"Error fetching user profile: {e}")
        return jsonify({"success":False,"message": "Internal server error"}), 500

# Get User Profile by ID
@user_bp.route("/profile/<string:user_id>", methods=["GET"])
@check_token_middleware
def get_user_profile(user_id):
    try:
        user = User.objects(id=user_id).first()
        if not user:
            return jsonify({"success":False,"message": "User not found"}), 404
        
        user_data = {
            "email": user.email,
            "name": user.name,
            "username": user.username,
            "userId": str(user.id),
            "profile_picture": user.profile_picture,
            "is_paid": user.is_paid,
            "is_google": user.is_google,
        }
        return jsonify({"success":True,"user": user_data}), 200
    
    except Exception as e:
        current_app.logger.error(f"Error fetching user profile: {e}")
        return jsonify({"success":False,"message": "Internal server error"}), 500

@user_bp.route("/profile/name/<string:user_name>", methods=["GET"])
@check_token_middleware
def get_user_profile_by_name(user_name):
    try:
        user = User.objects(username=user_name).first()
        if not user:
            return jsonify({"success":False,"message": "User not found"}), 404
        user_data = {
            "email": user.email,
            "name": user.name,
            "username": user.username,
            "userId": str(user.id),
            "profile_picture": user.profile_picture,
            "is_paid": user.is_paid,
            "is_google": user.is_google,
        }
        return jsonify({"success":True,"user": user_data}), 200
    except Exception as e:
        current_app.logger.error(f"Error fetching user profile by name: {e}")
        return jsonify({"success":False,"message": "Internal server error"}), 500

# Get all Users
@user_bp.route("/all", methods=["GET"])
@check_token_middleware
def get_all_users():
    try:
        users = User.objects()
        user_list = [
            {
                "email": user.email,
                "name": user.name,
                "username": user.username,
                "userId": str(user.id),
                "profile_picture": user.profile_picture,
            } for user in users]
        return jsonify({"success":True,"users": user_list}), 200
    
    except Exception as e:
        current_app.logger.error(f"Error fetching all users: {e}")
        return jsonify({"success":False,"message": "Internal server error"}), 500

# Update User Profile
@user_bp.route("/profile/update", methods=["PUT"])
@check_token_middleware
def update_user_profile():
    try:
        usermail = request.user_email
        if not usermail:
            return jsonify({"success":False,"message": "User Mail is required"}), 400
        
        user = User.objects(email=usermail).first()
        if not user:
            return jsonify({"success":False,"message": "User not found"}), 404
        
        #Logic to update user profile
        if 'username' in request.json:
            if User.objects(username=request.json['username']).first():
                return jsonify({"success":False,"message": "Username already exists"}), 400
            user.username = request.json['username']
        if 'name' in request.json:
            user.name = request.json['name']
        if 'profile_picture' in request.json:
            user.profile_picture = request.json['profile_picture']

        user.save()
        return jsonify({"success":True,"message": "User profile updated successfully"}), 200

    except Exception as e:
        current_app.logger.error(f"Error updating user profile: {e}")
        return jsonify({"success":False,"message": "Internal server error"}), 500

# Delete User Profile
@user_bp.route("/profile/delete", methods=["DELETE"])
@check_token_middleware
def delete_user_profile():
    try:
        usermail = request.user_email
        if not usermail:
            return jsonify({"success":False,"message": "User Mail is required"}), 400
        
        user = User.objects(email=usermail).first()
        if not user:
            return jsonify({"success":False,"message": "User not found"}), 404
        
        user.delete()
        return jsonify({"success":True,"message": "User deleted successfully"}), 200
    
    except Exception as e:
        current_app.logger.error(f"Error deleting user profile: {e}")
        return jsonify({"success":False,"message": "Internal server error"}), 500