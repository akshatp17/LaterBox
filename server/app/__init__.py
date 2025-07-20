from flask import Flask
from flask_login import LoginManager
from flask_cors import CORS
from config import Config
from mongoengine import connect

login_manager = LoginManager()
login_manager.login_view = "auth.login"

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)
    login_manager.init_app(app)
    
    # MongoDB connection
    connect(
        host=app.config["MONGO_URI"],
        alias="default"
    )

    from app.routes.authRoutes import auth_bp, oauth, register_google_oauth
    register_google_oauth(app, oauth)
    app.register_blueprint(auth_bp, url_prefix="/auth")

    @app.cli.command("db_create")
    def db_create():
        with app.app_context():
            print("✔ MongoDB test document inserted")

    return app