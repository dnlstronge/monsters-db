type navBarProps = {
  
    creaturesAZ: () => void
    tools: () => void
}

type creatureCardProps = {
    magic: string
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
    hp: string,
    magic: string
}
type creaturePostDBparams = {
    name: string
    desc: string
    attack: string
    defence: string
    hp: string
    magic: string
}
type cardProps = {
    name: string
    desc: string
    attack: string
    defence: string
    hp: string
    magic: string
    image: string
}
export type { navBarProps, creatureCardProps, statBarProps, creaturePostDBparams, cardProps }; 