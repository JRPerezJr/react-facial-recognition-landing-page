import { cardItems } from '../../stores/card-items';

import { CardContainer } from './card.styles';
import { CardItemComponent } from '../card-item/card-item.component';

export const CardComponent = () => {
  return (
    <CardContainer>
      {/*Cards*/}
      {cardItems.map(item => (
        <CardItemComponent key={item.id} item={item} />
      ))}
    </CardContainer>
  );
};
