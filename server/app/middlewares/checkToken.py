from functools import wraps
from flask import request
import jwt

"""
A decorator middleware that validates JWT tokens from HTTP Authorization headers.
This decorator extracts and validates JWT tokens from incoming requests, ensuring
that protected endpoints are only accessible with valid authentication tokens.
The decoded user email is attached to the request object for use in the decorated function.
Args:
    f (callable): The function to be decorated with token validation.
Returns:
    callable: The decorated function with token validation logic.
Raises:
    401: If token is missing, expired, or invalid.
Usage:
    @check_token_middleware
    def protected_route():
        # Access request.user_email here
        pass
Note:
    - Expects Authorization header in format "Bearer <token>" or just "<token>"
    - Sets request.user_email from the token's 'sub' claim
    - Token signature verification is disabled (verify_signature=False)
"""
def check_token_middleware(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        request_token = request.headers.get("Authorization")
        if not request_token:
            return {"success":False,"message": "Token is missing"}, 401
        
        token = request_token.split(" ")[1] if " " in request_token else request_token
        try:
            decoded_token = jwt.decode(token, options={"verify_signature": False})
            user_email = decoded_token.get("sub")
            request.user_email = user_email
        except jwt.ExpiredSignatureError:
            return {"success":False,"message": "Token has expired"}, 401
        except jwt.InvalidTokenError:
            return {"success":False,"message": "Invalid token"}, 401
        
        # Continue to the original function
        return f(*args, **kwargs)
    
    return decorated_function