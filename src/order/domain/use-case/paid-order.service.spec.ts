import { Order } from '../entity/order.entity';
import { OrderStatus } from '../enum/order-status.enum';
import { OrderRepositoryInterface } from '../port/order.repository.interface';
import { PaidOrderService } from './paid-order.service';

describe('paid order', () => {
  const order = new Order('John Doe', []);

  const orderRepositoryMock = {
    findById() {
      return order;
    },
    save(order: Order) {
      return order;
    },
  } as any as OrderRepositoryInterface;

  order.setShippingAddress('123 Main St');

  it('should update an order with a payment status', async () => {
    const paidOrderService = new PaidOrderService(orderRepositoryMock);

    const updatedOrder = await paidOrderService.paidOrder(order.id);

    expect(updatedOrder.status).toBe(OrderStatus.PAID);
  });
});
