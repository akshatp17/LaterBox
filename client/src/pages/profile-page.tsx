import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getCurrentUser, getUserByName } from '../services/userServices';

const ProfilePage = () => {
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (username) {
            const fetchUserProfile = async () => {
                try {
                    const userProfile = await getUserByName(username);
                    console.log("User Profile Data:", userProfile);
                    document.title = `${userProfile.user.name}'s Profile | LaterBox`;
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                    navigate('/error', { replace: true });
                }
            }
            fetchUserProfile();
        }
        else {
            const fetchCurrentUser = async () => {
                try {
                    const currentUser = await getCurrentUser();
                    console.log("Current User Data:", currentUser);

                    // Use the navigate hook that's defined at component level
                    if (currentUser && currentUser.user.name) {
                        navigate(`/profile/${currentUser.user.username}`, { replace: true });
                    }
                } catch (error) {
                    console.error("Error fetching current user:", error);
                }
            }
            fetchCurrentUser();
        }
    }, [username, navigate])


    return (
        <div>
            <h1>Profile Page</h1>
            {username ? <p>Viewing profile for user: {username}</p> : <p>Viewing your profile</p>}
        </div>
    )
}

export default ProfilePage
