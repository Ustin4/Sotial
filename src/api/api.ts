import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)


    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId:string){
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    },

}


export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:string){
        return instance.get('profile/status/'+ userId)
    },
    updateStatus(userId:string){
        return instance.put('profile/status',{status:status})
    }


}

export const authAPI={
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    }
}

