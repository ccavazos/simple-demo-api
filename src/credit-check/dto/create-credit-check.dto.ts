import { ApiProperty } from '@nestjs/swagger';

export class CreateCreditCheckRequestDto {
  @ApiProperty({ example: 'A1234567' })
  customerId: string;
}

export class CreateCreditCheckResponseDto {
  @ApiProperty()
  credit: number;
}
