export const userRole = {
    client: "Client",
    admin: "Admin",
    interviwer: "Interviwer"
}

export const apiBaseAddress = 'http://localhost:9000/api' ;

export const Roles = [
    { name: userRole.client, code: userRole.client },
    { name: userRole.interviwer, code: userRole.client },
    { name: userRole.admin, code: userRole.client },
];