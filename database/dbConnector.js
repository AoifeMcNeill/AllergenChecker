import Realm from 'realm';

//Realm database : Allergens and User


class Allergen extends Realm.Object {
}

Allergen.schema = {
    name: 'Allergen',
    properties: {
        id: 'string',
        name: 'string',
    },
};

class User extends Realm.Object {
}

User.schema = {
    name: 'User',
    primaryKey: 'username',
    properties: {
        username: 'string',
        name: 'string',
        birthDate: 'date?',
        gender: 'string?',
        allergies: 'Allergen[]',
        updatedAt: 'date?',
    },
};


// incrémenter schemaVersion à chaque modification des tables

export default new Realm({schema: [Allergen, User], schemaVersion: 20});