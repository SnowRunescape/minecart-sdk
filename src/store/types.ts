export type Store = {
    name: string,
    server_ip: string,
    customization: Customization,
    widgets: Widgets,
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

export type Widgets = {
    discord: {
        id: number,
    },
    twitter: {
        name: string,
    },
    purchases: {
        enabled: boolean,
        display_value: boolean,
        listing_type: string,
        listing_quantity: number,
        list: {
            buyer: string,
            amount?: string,
        }
    }
}