import auth from './auth/routes'
import home from './home/routes'
import profile from './profile/routes'

export default [...auth, ...home, ...profile]