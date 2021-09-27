import { ApiProperty } from '@nestjs/swagger';

export class CreateCreditCheckRequestDto {
  @ApiProperty({ example: 20000000 })
  annualRevenue: number;

  @ApiProperty({ example: 'Paris' })
  city: string;

  @ApiProperty({ example: 'Bank of Mars' })
  clientName: string;

  @ApiProperty({ example: 2 })
  companyAge: number;

  @ApiProperty({ example: 'France' })
  country: string;

  @ApiProperty({ example: true })
  defaultedPayment: boolean;

  @ApiProperty({ example: 'Tim.Temple@bankofmars.com' })
  email: string;

  @ApiProperty({ example: 'Tim' })
  firstName: string;

  @ApiProperty({ example: 'Banking'})
  industry: string;

  @ApiProperty({ example: 'Temple' })
  lastName: string;

  @ApiProperty({ example: 500 })
  numberOfEmployees: number;

  @ApiProperty({ example: '18885552233'})
  phoneNumber: string;

  @ApiProperty({ example: 'HP6A8LF2' })
  referenceId: string;

  @ApiProperty({ example: 'TBD' })
  segment: string;

  @ApiProperty({ example: 'Île-de-France' })
  state: string;

  @ApiProperty({ example: '17 Av. de l\'Europe' })
  street: string;

  @ApiProperty({ example: 'Online Banking' })
  unit: string;

  @ApiProperty({ example: '92275' })
  zipCode: string;
}

export class CreateCreditCheckResponseDto {
  @ApiProperty({ example: '' })
  comment: string;

  @ApiProperty()
  isAddressCurrent: boolean;

  @ApiProperty({ example: '19000' })
  preApprovedCreditAmount: number;

  @ApiProperty({ example: '95000' })
  maxCreditRecommendedAmount: number;

  @ApiProperty({ example: '92' })
  creditScore: number;
}
