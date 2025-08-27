interface Admin {
    username?: string
    name: string
    mail: string
    password: string | number
}

const ADMIN_KEY = "auth"

const saveAdmin = (admin: Admin): void => {
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin))
}

function getAdmin(): Admin | null {
    const data = localStorage.getItem(ADMIN_KEY)
    if (!data) return null
    try {
        return JSON.parse(data) as Admin
    } catch (error) {
        console.error("Error parsing admin:", error)
        return null
    }
}

function removeAdmin(): void {
    localStorage.removeItem(ADMIN_KEY)
}
