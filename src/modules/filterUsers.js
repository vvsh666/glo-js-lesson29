import { render } from "./render"

export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren')
    const btnIsPermissions = document.getElementById('btn-isPermissions')
    const btnIsAll = document.getElementById('btn-isAll')

    btnIsChildren.addEventListener('click', () => {
        userService.filterUsers('children').then(user => {
            render(user);
        })
    })

    btnIsPermissions.addEventListener('click', () => {
        userService.filterUsers('permissions').then(user => {
            render(user);
        })
    })

    btnIsAll.addEventListener('click', () => {
        userService.getUsers().then(user => {
            render(user);
        })
    })
}