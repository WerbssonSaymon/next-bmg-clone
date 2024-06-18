export default interface Evento {
    id: string
    nome: string
    setor: string
    duracao: number
    status: 'Em breve' | 'Lançada' | 'Depreciada'
}