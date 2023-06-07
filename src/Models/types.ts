type navBarProps = {
    creaturesAZ: () => void
}

type creatureCardProps = {
    attack: string,
    defence: string,
    desc: string,
    hp: string,
    id: string,
    imageURL: string,
    name: string
}

type statBarProps = {
    attack: string,
    defence: string,
    hp: string;
}

export type { navBarProps, creatureCardProps, statBarProps }; 