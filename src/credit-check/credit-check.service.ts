import { Injectable } from '@nestjs/common';
import { CreateCreditCheckRequestDto, CreateCreditCheckResponseDto } from './dto/create-credit-check.dto';

@Injectable()
export class CreditCheckService {
  create(createCreditCheckDto: CreateCreditCheckRequestDto) {
    const lastChar = createCreditCheckDto.referenceId.substring(createCreditCheckDto.referenceId.length - 1);
    let credit: number;
    let creditScore: number;
    switch (lastChar) {
      case '0':
        credit = 100000;
        creditScore = 67;
        break;
      case '1':
        credit = 110000;
        creditScore = 70;
        break;
      case '2':
        credit = 120000;
        creditScore = 73;
        break;
      case '3':
        credit = 130000;
        creditScore = 76;
        break;
      case '4':
        credit = 140000;
        creditScore = 79;
        break;
      case '5':
        credit = 150000;
        creditScore = 82;
        break;
      case '6':
        credit = 160000;
        creditScore = 85;
        break;
      case '7':
        credit = 170000;
        creditScore = 88;
        break;
      case '8':
        credit = 180000;
        creditScore = 91;
      case '9':
        credit = 190000;
        creditScore = 94;
        break;
      default:
        credit = 50000;
        creditScore = 64;
        break;
    }
    const creditCheck: CreateCreditCheckResponseDto = {
      comment: `Credit is ${credit} because Reference ID ends with ${lastChar}`,
      isAddressCurrent: true,
      preApprovedCreditAmount: credit,
      maxCreditRecommendedAmount: credit * 5,
      creditScore: creditScore
    };
    return creditCheck;
  }
}
