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

export type { navBarProps, creatureCardProps }; 