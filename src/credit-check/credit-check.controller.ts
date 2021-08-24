import { Controller, Post, Body, HttpCode, BadRequestException, HttpStatus } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreditCheckService } from './credit-check.service';
import { CreateCreditCheckRequestDto, CreateCreditCheckResponseDto } from './dto/create-credit-check.dto';

@Controller('credit-check')
export class CreditCheckController {
  constructor(private readonly creditCheckService: CreditCheckService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: CreateCreditCheckResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Reference Id must have 8 characters.',
  })
  create(@Body() createCreditCheckDto: CreateCreditCheckRequestDto) {
    if (!createCreditCheckDto.referenceId || createCreditCheckDto.referenceId.length !== 8) {
      throw new BadRequestException();
    }
    const response: CreateCreditCheckResponseDto = this.creditCheckService.create(createCreditCheckDto);
    return response;
  }
}
