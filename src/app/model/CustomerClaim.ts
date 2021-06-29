export class CustomerClaim {
    name: string;
    phone: string;
    id_card: string;
    bhstyle: number;

    constructor(name: string,
        phone: string,
        id_card: string,
        bhstyle: number){
            
        this.name = name;
        this.phone = phone;
        this.id_card = id_card;
        this.bhstyle = bhstyle;

    }
}
