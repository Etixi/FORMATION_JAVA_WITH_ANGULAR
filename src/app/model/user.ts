import { Address } from "./address";

export class User {
    username!: string;
    firstName!: string;
    lastName!: string;
    title!: string;
    phone!: string;

    address!: Address;
}
