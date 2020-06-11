export interface Layer {
    id: number,
    type: string,
    width: number,
    activation: string
}

export interface Network {
    name: string,
    description: string,
    creator: string,
    id: string,
    layers: Layer[],
}

export interface Networks {
    nets: Network[];
}