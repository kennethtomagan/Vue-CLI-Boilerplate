import auth from './auth/routes'
import home from './home/routes'
import profile from './profile/routes'
import notfound from './404/routes'

export default [...auth, ...home, ...profile, ...notfound]