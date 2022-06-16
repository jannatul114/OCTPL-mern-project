import { useEffect } from "react"

const useProfile = (user) => {
    useEffect(() => {
        const email = user?.user?.email;
        const name = user?.displayName;
        console.log(email);
        console.log(name);
        const MainUser = { email: email, name: name }
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(MainUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }, [user])
}

export default useProfile;