export const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
    },
    {
        title: true,
        name: 'Services'
    },
    {
        name: 'Services',
        url: '/services',
        icon: 'icon-drop'
    },
    {
        title: true,
        name: 'Incidents'
    },
    {
        name: 'Incidents',
        url: '/incident',
        icon: 'icon-drop'
    },
    {
        title: true,
        name: 'Units'
    },
    {
        name: 'Units',
        url: '/unit',
        icon: 'icon-drop'
    },
    {
        title: true,
        name: 'Phasedplan'
    },
    {
        name: 'Phasedplan',
        url: '/phasedplan',
        icon: 'icon-drop',
        children: [
            {
                name: 'All',
                url: '/phasedplan/list',
                icon: 'icon-drop'
            },
            {
                name: 'Add',
                url: '/phasedplan/add',
                icon: 'icon-drop'
            },
        ],
    },
    {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
            {
                name: 'Login',
                url: '/login',
                icon: 'icon-star'
            },
            {
                name: 'Register',
                url: '/register',
                icon: 'icon-star'
            },
            {
                name: 'Error 404',
                url: '/404',
                icon: 'icon-star'
            },
            {
                name: 'Error 500',
                url: '/500',
                icon: 'icon-star'
            }
        ]
    },
];
