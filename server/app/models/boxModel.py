from mongoengine import (
    Document, StringField, DateTimeField,
    ReferenceField, BooleanField
)
from datetime import datetime
from .userModel import User

class Box(Document):
    user = ReferenceField(User, required=True)
    title = StringField(required=True)
    message = StringField(required=True)
    audio_file = StringField() 
    video_file = StringField() 
    target_user = ReferenceField(User, required=True)
    end_date = DateTimeField(required=True)
    is_active = BooleanField(default=True)
    created_at = DateTimeField(default=datetime.utcnow)

    meta = {'collection': 'boxes'}