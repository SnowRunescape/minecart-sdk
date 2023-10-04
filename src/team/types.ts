export type Team = {
    id: number,
    team: string,
    color: string,
    members: Member,
}

export type Member = {
    [key: number]: string;
}