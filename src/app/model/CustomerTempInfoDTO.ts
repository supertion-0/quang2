export class CustomerTempInfoDTO {
    id: number;
    name: String;
    address: String;
    phone: String;

    constructor(
        id: number,
        name: String,
        address: String,
        phone: String,
    ) {
        this.id = id;
        this.address = address;
        this.name = name;
        this.phone = phone;
    }

}