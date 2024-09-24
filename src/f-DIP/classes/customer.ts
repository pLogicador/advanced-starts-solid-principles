import { CustomerOrder, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from "./interfaces/customer-protocol";

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor ( firstName: string, lastName: string, cpf: string,) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  // Additional methods specific to IndividualCustomer can be added here
  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return `${this.cpf}`;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  companyName: string;
  cnpj: string;

  constructor ( companyName: string, cnpj: string) {
    this.companyName = companyName;
    this.cnpj = cnpj;
  }

  // Additional methods specific to EnterpriseCustomer can be added here
  getName(): string {
    return `${this.companyName}`;
  }

  getIDN(): string {
    return `${this.cnpj}`;
  }
}
