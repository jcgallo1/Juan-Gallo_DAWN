
    export interface Info {
        attack: number;
        defense: number;
        magic: number;
        difficulty: number;
    }

    export interface Stats {
        hp: number;
        hpperlevel: number;
        mp: number;
        mpperlevel: number;
        movespeed: number;
        armor: number;
        armorperlevel: number;
        spellblock: number;
        spellblockperlevel: number;
        attackrange: number;
        hpregen: number;
        hpregenperlevel: number;
        mpregen: number;
        mpregenperlevel: number;
        crit: number;
        critperlevel: number;
        attackdamage: number;
        attackdamageperlevel: number;
        attackspeedperlevel: number;
        attackspeed: number;
    }

    export interface campeon {
        version: string;
        id: string;
        key: string;
        name: string;
        title: string;
        blurb: string;
        info: Info;
        tags: string[];
        partype: string;
        stats: Stats;
    }

    export interface Image {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
    }

    export interface Data {
        blurb: string;
        id: string;
        image: Image;
        info: Info;
        key: String;
        partype: String;
        stats: Stats;
        tags: string[];
        title:string;
        version: string;

    }

    export interface RootObject {
        type: string;
        format: string;
        version: string;
        data: Data;
    }
