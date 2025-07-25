from flask import Blueprint, jsonify, redirect, url_for, current_app, request
from app.models.userModel import User
from app.models.boxModel import Box
from app.middlewares.checkToken import check_token_middleware

boxes_bp = Blueprint("boxes", __name__)

@boxes_bp.route("/create", methods=["POST"])
@check_token_middleware
def create_box():
    pass

@boxes_bp.route("/<box_id>", methods=["GET"])
@check_token_middleware
def get_box(box_id):
    pass

@boxes_bp.route("/<box_id>/delete", methods=["DELETE"])
@check_token_middleware
def delete_box(box_id):
    pass
