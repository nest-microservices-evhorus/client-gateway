import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common/index';
import { OrderStatus, OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList)
  status: OrderStatus;
}
