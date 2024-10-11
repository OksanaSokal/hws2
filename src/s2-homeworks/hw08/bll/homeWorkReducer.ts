import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newUserArr= [...state];

            if (action.payload === 'up') {
                 newUserArr.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }

            if (action.payload === 'down') {
              newUserArr.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }
            return newUserArr
        }
        case 'check': {
                return state.filter((user) => user.age >= 18) // need to fix
            }
        default:
            return state
        }
    }
