from mongoengine import (
    Document, StringField, DateTimeField, ListField,
    ReferenceField, BooleanField
)
from datetime import datetime

class User(Document):
    email = StringField(required=True, unique=True)
    password = StringField()
    name = StringField(required=True)
    username = StringField(required=True, unique=True)
    profile_picture = StringField()
    is_paid = BooleanField(default=False)
    is_google = BooleanField(default=False)
    google_id = StringField(unique=True, sparse=True)
    friends = ListField(ReferenceField('self'))
    created_at = DateTimeField(default=datetime.utcnow)

    meta = {'collection': 'users'}