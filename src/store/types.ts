export type Store = {
    name: string,
    server_ip: string,
    customization: Customization,
}

export type Customization = {
    logo: string,
    background: string,
    background_cash: string,
    description: string,
    colors: {
        '--color0': string,
        '--color1': string,
        '--color2': string,
    }
    menu: {
        home: Menu,
        shop: Menu,
        rules: Menu,
        team: Menu,
    }
}

export type Menu = {
    enable: boolean,
    image: string,
}