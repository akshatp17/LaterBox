from functools import wraps
from flask import request

def check_token_middleware(f):
    """
    Simple middleware that prints hello for now
    """
    @wraps(f)
    def decorated_function(*args, **kwargs):
        print("Hello from middleware!")
        print(f"Request URL: {request.url}")
        print(f"Request Method: {request.method}")
        
        # Continue to the original function
        return f(*args, **kwargs)
    
    return decorated_function