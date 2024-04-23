import { OrderItem } from '../entity/order-item.entity';
import { Order } from '../entity/order.entity';
import { OrderRepositoryInterface } from '../port/order.repository.interface';
import { AddOrderItemService } from './add-order-item.service';
describe('add order item', () => {
  const orderItem = new OrderItem('123', 1, 100);
  const order = new Order('John Doe', []);
  const orderRepositoryMock = {
    findById() {
      return order;
    },
    save(order: Order) {
      return order;
    },
    update(order: Order) {
      return order;
    },
  } as unknown as OrderRepositoryInterface;

  it('it should update order with a new order item', async () => {
    const addOrderItemService = new AddOrderItemService(orderRepositoryMock);
    const updatedOrder = await addOrderItemService.addOrderItem(
      '123',
      orderItem,
    );
    expect(updatedOrder.orderItems.length).toBe(1);
  });
});
