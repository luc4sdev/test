
//test
export interface CreateClientUseCaseRequest {
    name: string
    game: string
    title: string
    type: "FISICA" | "JURIDICA"
    document: string
    birthDate: string
    address: {
        street: string;
        number: string;
        cep: string;
        neighborhood: string;
        city: string;
    }
}


export class CreateClientUseCase {

    constructor(private clientsRepository: any) { }

    async execute({ name, type, document, birthDate, address, game, title }: CreateClientUseCaseRequest): Promise<any> {

        const client = await this.clientsRepository.create({ name, type, document, birthDate, address, game, title })

        const abc = title.toString().toLocaleUpperCase()
        return {
            client,
            abc
        }

    }
}
