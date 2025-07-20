from mongoengine import Document, StringField, DateTimeField
from datetime import datetime

class User(Document):
    email = StringField(required=True, unique=True)
    password = StringField()
    name = StringField(required=True)
    username = StringField(required=True, unique=True)
    profile_picture = StringField()
    is_paid = StringField(default="false")
    google_id = StringField(unique=True)
    created_at = DateTimeField(default=datetime.utcnow)

    meta = {'collection': 'users'}
